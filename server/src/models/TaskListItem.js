const dayjs = require("dayjs");
class TaskListItem {
  constructor(
    title,
    dateString,
    dueTime,
    estimatedTime,
    description = "",
    id,
    date_iso_string
  ) {
    this.title = title;
    this.dateString = dateString;
    this.dueTime = dueTime;
    this.estimatedTime = estimatedTime;
    this.description = description;
    this.id = id;
    this.date = dayjs(date_iso_string);
  }
}

module.exports = TaskListItem;
