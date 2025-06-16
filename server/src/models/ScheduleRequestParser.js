const TimeSlot = require("./TimeSlot");
const Day = require("./Day");
const TaskListItem = require("./TaskListItem");

class ScheduleRequestParser {
  constructor() {}

  parseScheduleRequest(requestBody) {
    const requestDays = requestBody["packagedDays"];
    const taskListItems = requestBody["taskList"];

    const days = this.#parseRequestDays(requestDays);
    const tasks = this.#parseTaskListItems(taskListItems);
  }

  #parseTaskListItems(taskListItems) {
    let tasks = [];
    for (let i = 0; i < taskListItems.length; ++i) {
      const taskListItem = taskListItems[i];
      const task = new TaskListItem(
        taskListItem["title"],
        taskListItem["dateString"],
        taskListItem["dueTime"],
        taskListItem["estimatedTime"],
        taskListItem["description"],
        taskListItem["id"],
        taskListItem["date"]
      );
      tasks.push(task);
    }
    return tasks;
  }

  #parseRequestDays(requestDays) {
    let days = [];
    for (let i = 0; i < requestDays.length; ++i) {
      let requestDay = requestDays[i];
      const timeSlots = this.#parseRequestTimeSlots(requestDay["timeSlots"]);
      const day = new Day(
        requestDay["dayStr"],
        requestDay["dayOfWeek"],
        requestDay["date"],
        timeSlots
      );
      days.push(day);
    }
    return days;
  }

  #parseRequestTimeSlots(requestTimeSlots) {
    let timeSlots = [];
    for (let i = 0; i < requestTimeSlots.length; ++i) {
      const requestTimeSlot = requestTimeSlots[i];
      const timeSlot = new TimeSlot(
        requestTimeSlot["time"],
        requestTimeSlot["available"]
      );
      timeSlots.push(timeSlot);
    }
    return timeSlots;
  }
}

module.exports = ScheduleRequestParser;
