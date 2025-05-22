const Task = require("../models/Task.js");
const TaskScheduler = require("../models/TaskScheduler.js");

describe("TaskScheduler can validate that tasks can be successfully scheduled", () => {
  let scheduler;

  beforeEach(() => {
    scheduler = new TaskScheduler();
  });

  test("Basic Pass", () => {
    const task1 = new Task("Task1", "t1", 5, 2);
    const task2 = new Task("Task2", "t2", 5, 1);
    const task3 = new Task("task3", "t3", 9, 2);
    const task4 = new Task("task4", "t4", 9, 2);
    const taskList = [task4, task3, task2, task1];
    expect(() => scheduler.verifyTasks(taskList)).not.toThrow();
  });

  test("Complex Pass", () => {
    const task1 = new Task("Task1", "t1", 6, 2);
    const task2 = new Task("Task2", "t2", 6, 3);
    const task3 = new Task("task3", "t3", 12, 2);
    const task4 = new Task("task4", "t4", 12, 2);
    const task5 = new Task("task5", "t4", 18, 4);
    const task6 = new Task("task6", "t4", 18, 3);
    const taskList = [task1, task2, task3, task4, task5, task6];
    expect(() => scheduler.verifyTasks(taskList)).not.toThrow();
  });

  test("Fail first task", () => {
    const task1 = new Task("Task1", "t1", 5, 3);
    const task2 = new Task("Task2", "t2", 5, 3);
    const taskList = [task1, task2];
    expect(() => scheduler.verifyTasks(taskList)).toThrow();
  });

  test("Fail Nth task", () => {
    let task1 = new Task("Task1", "t1", 6, 2);
    let task2 = new Task("Task2", "t2", 6, 3);
    let task3 = new Task("task3", "t3", 12, 2);
    let task4 = new Task("task4", "t4", 12, 2);
    let task5 = new Task("task5", "t4", 18, 4);
    let task6 = new Task("task6", "t4", 18, 3);
    const taskList = [task1, task2, task3, task4, task5, task6];
    const position = Math.floor(Math.random() * taskList.length);
    taskList[position].timeRemaining *= 3;
    expect(() => scheduler.verifyTasks(taskList)).toThrow();
  });
});
