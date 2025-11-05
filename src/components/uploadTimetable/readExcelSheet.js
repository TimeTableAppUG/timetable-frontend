import * as XLSX from "xlsx";

const courseCodeRegex = /^[A-Z]{2,4}\s?\d{2,3}$/i;
const timeRegex = /(\d{1,2}:\d{2}\s?(?:AM|PM)?)/i;
const venueRegex = /^[A-Za-z\s()&-]*\d{0,3}$/;

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function estimateEndTime(startTime) {
  const [time, modifier] = startTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  hours += 2; // default 2-hour slot
  if (hours > 12) hours -= 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${modifier}`;
}

export default async function readExcelSheet(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        // Read all rows, keep empty cells
        let jsonData = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          defval: "",
        });
        jsonData = jsonData.slice();
        console.log("JSON RAW ", jsonData);
        // skip first 5 rows if needed

        const timetable = [];
        let lastTimeRange = null;

        // Track course+venue per day in a row, even for continuation rows
        jsonData.forEach((row, rowIndex) => {
          if (!row || row.length === 0) return;

          const firstCell = row[0]?.toString().trim();
          if (firstCell && timeRegex.test(firstCell)) {
            // New time slot
            const startTime = firstCell.match(timeRegex)[0];
            // Find next time row
            const nextRow = jsonData
              .slice(rowIndex + 1)
              .find((r) => r[0] && timeRegex.test(r[0]?.toString()));
            const endTime = nextRow ? nextRow[0].match(timeRegex)[0] : "TBD";
            lastTimeRange = `${startTime} to ${endTime}`;
          }

          if (!lastTimeRange) return;

          // Loop through columns in pairs for days
          for (let i = 1; i < row.length; i += 2) {
            const courseCell = row[i]?.toString().trim();
            const venueCell = row[i + 1]?.toString().trim();
            if (!courseCell || !venueCell) continue;

            const courseCode =
              courseCell.match(courseCodeRegex)?.[0] || courseCell;
            const venue = venueCell.match(venueRegex)?.[0] || venueCell;

            const day = days[Math.floor((i - 1) / 2)] || "Unknown";

            timetable.push({
              day,
              courseCode,
              venue,
              timeSlot: lastTimeRange,
              row: rowIndex + 6,
            });
          }
        });

        resolve({ rawData: jsonData, timetable });
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = (err) => reject(err);
    reader.readAsArrayBuffer(file);
  });
}
