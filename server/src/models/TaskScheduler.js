const { createTaskDictionary } = require("../util/util.js");
class TaskScheduler {
  constructor() {}

  verifyTasks(taskList) {
    const taskDictionary = createTaskDictionary(taskList);
    let systemTime = 0;
    let overtime = 0;
    for (const deadline in taskDictionary) {
      const relativeDeadline = Number(deadline) + overtime - systemTime;
      const totalTaskTime = this.#getTotalTaskTime(taskDictionary[deadline]);
      if (!this.#isValidDeadline(relativeDeadline, totalTaskTime)) {
        throw new Error(
          "ERROR: Tasks cannot be scheduled, impossible to complete before the deadline."
        );
      }
      overtime = relativeDeadline - totalTaskTime;
      systemTime = Number(deadline) - overtime;
    }
  }

  #isValidDeadline(relativeDeadline, totalTaskTime) {
    return totalTaskTime < relativeDeadline;
  }

  #getTotalTaskTime(deadlineList) {
    let sum = 0;
    for (const task of deadlineList) {
      sum += task.timeRemaining;
    }
    return sum;
  }
}

module.exports = TaskScheduler;
