function parseTimeToMinutes(timeStr) {
  if (!timeStr || typeof timeStr !== "string") return null;
  const m = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let hh = parseInt(m[1], 10);
  const mm = parseInt(m[2], 10);
  const ampm = m[3].toUpperCase();
  if (ampm === "AM") {
    if (hh === 12) hh = 0;
  } else {
    if (hh !== 12) hh += 12;
  }
  return hh * 60 + mm;
}

function entriesOverlap(a, b) {
  if (!a.day || !b.day) return false;
  if (a.day.toLowerCase() !== b.day.toLowerCase()) return false;
  const aStart = parseTimeToMinutes(a.startTime);
  const aEnd = parseTimeToMinutes(a.endTime);
  const bStart = parseTimeToMinutes(b.startTime);
  const bEnd = parseTimeToMinutes(b.endTime);
  if ([aStart, aEnd, bStart, bEnd].some((v) => v === null)) return false;
  return aStart < bEnd && bStart < aEnd;
}

function flattenTimetables(timetables) {
  const out = [];
  if (!Array.isArray(timetables)) return out;
  timetables.forEach((tt) => {
    const meta = {
      timetableId: tt.id,
      department: tt.department,
      level: tt.level,
      year: tt.year,
    };
    if (Array.isArray(tt.entries)) {
      tt.entries.forEach((e) => {
        out.push(Object.assign({}, meta, e));
      });
    }
  });
  return out;
}

function findClashes(timetables) {
  const entries = flattenTimetables(timetables);
  const clashes = [];
  for (let i = 0; i < entries.length; i += 1) {
    for (let j = i + 1; j < entries.length; j += 1) {
      const a = entries[i];
      const b = entries[j];
<<<<<<< HEAD
      const aLevel = (a.level || '').toString().toLowerCase();
      const bLevel = (b.level || '').toString().toLowerCase();
      if (aLevel && bLevel && aLevel !== bLevel) continue;
=======
>>>>>>> 5ea9412 (feat: add clash checking functionality)
      if (entriesOverlap(a, b)) {
        clashes.push({
          a: {
            timetableId: a.timetableId,
            department: a.department,
            level: a.level,
            courseCode: a.courseCode,
            day: a.day,
            startTime: a.startTime,
            endTime: a.endTime,
            venue: a.venue,
          },
          b: {
            timetableId: b.timetableId,
            department: b.department,
            level: b.level,
            courseCode: b.courseCode,
            day: b.day,
            startTime: b.startTime,
            endTime: b.endTime,
            venue: b.venue,
          },
        });
      }
    }
  }
  return clashes;
}

function hasClash(timetables) {
  return findClashes(timetables).length > 0;
}

// func to load db
// should be changed when we no longer use a JSON file for storage
let checkDbClashes;
try {
  const db = require("../../db.json");
  checkDbClashes = () => ({
    clashes: findClashes(db.timetables),
    hasClash: hasClash(db.timetables),
  });
} catch (err) {
  checkDbClashes = () => ({
    clashes: [],
    hasClash: false,
    error: "could not load db",
  });
}

// test
// update db.json with clashes and checj if it works fine
const _dbCheck = checkDbClashes();
if (_dbCheck.error) {
  console.warn("error loading db.json:", _dbCheck.error);
} else {
  console.log("hasClash =", _dbCheck.hasClash);
  if (_dbCheck.clashes && _dbCheck.clashes.length) {
    console.log("clashes:", JSON.stringify(_dbCheck.clashes, null, 2));
  } else {
    console.log("no clashes");
  }
}

module.exports = {
  parseTimeToMinutes,
  entriesOverlap,
  flattenTimetables,
  findClashes,
  hasClash,
  checkDbClashes,
};
