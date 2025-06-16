const dayjs = require("dayjs");

class Day {
  constructor(dayStr, dayOfWeek, date_iso_string, timeSlots) {
    this.dayStr = dayStr;
    this.dayOfWeek = dayOfWeek;
    this.date = dayjs(date_iso_string);
    this.timeSlots = timeSlots;
  }
}

module.exports = Day;
