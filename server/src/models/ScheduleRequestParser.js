const TimeSlot = require("./TimeSlot");
const Day = require("./Day");
const TaskListItem = require("./TaskListItem");
const Task = require("./Task");

class ScheduleRequestParser {
  constructor() {}

  parseScheduleRequest(requestBody) {
    const requestDays = requestBody["packagedDays"];
    const requestListItems = requestBody["taskList"];

    const days = this.#parseRequestDays(requestDays);
    const taskListItems = this.#parseTaskListItems(requestListItems);
    const tasks = this.parseTasks(taskListItems, days);
    return tasks;
  }

  parseTasks(taskListItems, days) {
    let tasks = [];
    // get the tasks now
    for (let i = 0; i < taskListItems.length; ++i) {
      const taskListItem = taskListItems[i];
      const dayIndex = this.getDayIndex(taskListItem, days);
      const taskDeadline = this.getTimeTillDue(taskListItem, days, dayIndex);
      const task = new Task(
        taskListItem.title,
        taskListItem.id,
        taskDeadline,
        taskListItem.estimatedTime,
        taskListItem.dateString
      );
      tasks.push(task);
    }
    return tasks;
  }

  getTimeTillDue(taskListItem, days, dayIndex) {
    const day = days[dayIndex];
    const slotsInDay = this.getSlotsInDay(day, taskListItem);
    const previousSlotsSum = this.accumulatePreviousTimeSlots(days, dayIndex);
    const timeTillDue = slotsInDay + previousSlotsSum;
    return timeTillDue;
  }

  getSlotsInDay(day, taskListItem) {
    const taskItemHour = taskListItem.date.hour();
    let numSlots = -1;
    const timeSlots = day.timeSlots;
    for (let i = timeSlots.length - 1; i >= 0; --i) {
      if (timeSlots[i].time.hour() - taskItemHour < 0) {
        numSlots = i;
        break;
      }
    }
    return numSlots + 1;
  }

  accumulatePreviousTimeSlots(days, dayIndex) {
    let sum = 0;
    for (let i = 0; i < dayIndex; ++i) {
      const day = days[i];
      sum += day.timeSlots.length;
    }
    return sum;
  }

  getDayIndex(taskListItem, days) {
    let index = -1;
    for (let i = 0; i < days.length; ++i) {
      if (taskListItem.date.isSame(days[i].date, "day")) {
        index = i;
        break;
      }
    }
    return index;
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
