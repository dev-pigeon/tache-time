const dayjs = require("dayjs");
class TimeSlot {
  constructor(iso_string, available) {
    this.time = dayjs(iso_string);
    this.available = available;
  }
}

module.exports = TimeSlot;
