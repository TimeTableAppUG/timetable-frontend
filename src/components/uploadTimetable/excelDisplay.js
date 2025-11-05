import React, { useState } from "react";
import FileInput from "./fileInput";
import readExcelSheet from "./readExcelSheet";

export default function ExcelProcessor() {
  const [timetable, setTimetable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = async (file) => {
    try {
      setIsLoading(true);
      const data = await readExcelSheet(file);
      // Filter out entries with missing fields
      const filtered = (data.timetable || []).filter(
        (t) =>
          t.day &&
          t.day.trim() !== "" &&
          t.courseCode &&
          t.courseCode.trim() !== "" &&
          t.venue &&
          t.venue.trim() !== "" &&
          t.timeSlot &&
          t.timeSlot.trim() !== ""
      );
      setTimetable(filtered);
      console.log(
        "✅ Filtered JSON Output:",
        JSON.stringify(filtered, null, 2)
      );
    } catch (error) {
      console.error("Error reading excel file ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to convert "7:30 AM" to minutes since midnight for sorting
  const timeStringToMinutes = (timeStr) => {
    if (!timeStr) return 0;
    const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!match) return 0;
    let [_, hour, minute, meridiem] = match;
    hour = parseInt(hour, 10);
    minute = parseInt(minute, 10);
    if (meridiem.toUpperCase() === "PM" && hour !== 12) hour += 12;
    if (meridiem.toUpperCase() === "AM" && hour === 12) hour = 0;
    return hour * 60 + minute;
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Sort time slots
  const timeSlots = [...new Set(timetable.map((t) => t.timeSlot))].sort(
    (a, b) =>
      timeStringToMinutes(a.split(" to ")[0]) -
      timeStringToMinutes(b.split(" to ")[0])
  );

  // Prepare table rows, group by time slot
  const tableRows = [];
  timeSlots.forEach((time) => {
    // Collect all entries for this time slot
    const entriesForTime = timetable.filter((t) => t.timeSlot === time);

    // Determine how many rows are needed per time slot
    const maxRows = Math.max(
      ...days.map((day) => entriesForTime.filter((t) => t.day === day).length),
      1
    );

    for (let i = 0; i < maxRows; i++) {
      const rowObj = {};
      // Only show time for the first row of this group
      rowObj.time = i === 0 ? time : "";
      days.forEach((day) => {
        const dayEntries = entriesForTime.filter((t) => t.day === day);
        rowObj[day] = dayEntries[i]
          ? `${dayEntries[i].courseCode} | ${dayEntries[i].venue}`
          : "";
      });
      tableRows.push(rowObj);
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Excel Timetable Processor</h1>
      <FileInput onFileSelect={handleFileSelect} />

      {isLoading && <p>Loading...</p>}

      {!isLoading && timetable.length > 0 && (
        <table
          border="1"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#e0e0ff" }}>
              <th>Time</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, idx) => (
              <tr key={idx}>
                <td style={{ padding: "8px", fontWeight: "bold" }}>
                  {row.time}
                </td>
                {days.map((day) => (
                  <td key={day} style={{ padding: "6px", fontSize: "14px" }}>
                    {row[day]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
