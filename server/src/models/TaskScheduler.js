const { createTaskDictionary } = require("../util/util.js");
const WorkUnit = require("./WorkUnit.js");

class TaskScheduler {
  constructor() {}

  scheduleTasks(taskList) {
    try {
      let scheduleDictionary = this.#initializeScheduleDictionary(taskList);
      this.verifyTasks(taskList);
      let systemTime = 0;

      while (taskList.length > 0) {
        const taskToScheduleIndex = this.#getTaskToScheduleIndex(
          taskList,
          systemTime
        );
        const taskToSchedule = taskList[taskToScheduleIndex];
        this.#updateTaskDictionary(
          taskToSchedule.id,
          scheduleDictionary,
          systemTime
        );

        taskToSchedule.timeRemaining -= 1;
        if (this.#shouldRemoveTask(taskToSchedule)) {
          taskList.splice(taskToScheduleIndex, 1);
        }
        systemTime++;
      }
      return scheduleDictionary;
    } catch (error) {
      throw new Error(error);
    }
  }

  #updateTaskDictionary(taskID, dictionary, i) {
    dictionary[taskID].push(i);
  }

  #initializeScheduleDictionary(taskList) {
    let dictionary = {};
    for (let i = 0; i < taskList.length; ++i) {
      dictionary[taskList[i].id] = [];
    }
    return dictionary;
  }

  verifyTasks(taskList) {
    const taskDictionary = createTaskDictionary(taskList);
    let systemTime = 0;
    let overtime = 0;
    for (const deadline in taskDictionary) {
      const relativeDeadline = Number(deadline) + overtime - systemTime;
      const totalTaskTime = this.#getTotalTaskTime(taskDictionary[deadline]);
      if (!this.#isValidDeadline(relativeDeadline, totalTaskTime)) {
        throw new Error(
          "The given tasks are impossible to complete before their deadlines."
        );
      }
      overtime = relativeDeadline - totalTaskTime;
      systemTime = Number(deadline) - overtime;
    }
  }

  #shouldRemoveTask(task) {
    return task.timeRemaining <= 0;
  }

  #getTaskToScheduleIndex(taskList, systemTime) {
    let maxWeight = -1;
    let taskIndex = -1;
    for (let i = 0; i < taskList.length; ++i) {
      const task = taskList[i];
      const taskWeight = this.#calculateTaskWeight(task, systemTime);
      if (taskWeight > maxWeight) {
        taskIndex = i;
        maxWeight = taskWeight;
      } else if (taskWeight == maxWeight) {
        const minTask = taskList[taskIndex];
        if (task.deadline < minTask.deadline) {
          // means that current task is due sooner than the previously set min task & they have equal weight, so we should schedule the sooner one
          taskIndex = i;
          maxWeight = taskWeight;
        }
      }
    }
    return taskIndex;
  }

  #calculateTaskWeight(task, systemTime) {
    const denominator = Math.max(
      1,
      task.deadline - systemTime - task.timeRemaining
    );
    return 1 / denominator;
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
