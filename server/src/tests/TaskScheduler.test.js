const Task = require("../models/Task.js");
const TaskScheduler = require("../models/TaskScheduler.js");

describe("TaskScheduler can validate that tasks can be successfully scheduled", () => {
  let scheduler;
  let task1;
  let task2;
  let task3;
  let task4;
  let task5;
  let task6;

  beforeEach(() => {
    scheduler = new TaskScheduler();
    task1 = new Task("Task1", "t1", 6, 2);
    task2 = new Task("Task2", "t2", 6, 3);
    task3 = new Task("task3", "t3", 12, 2);
    task4 = new Task("task4", "t4", 12, 2);
    task5 = new Task("task5", "t4", 18, 4);
    task6 = new Task("task6", "t4", 18, 3);
  });

  test("Basic Pass", () => {
    const taskList = [task4, task3, task2, task1];
    expect(() => scheduler.verifyTasks(taskList)).not.toThrow();
  });

  test("Complex Pass", () => {
    const taskList = [task1, task2, task3, task4, task5, task6];
    expect(() => scheduler.verifyTasks(taskList)).not.toThrow();
  });

  test("Fail first task", () => {
    task1.timeRemaining = 100;
    const taskList = [task1, task2];
    expect(() => scheduler.verifyTasks(taskList)).toThrow();
    task1.timeRemaining = 2;
  });

  test("Fail Nth task", () => {
    const taskList = [task1, task2, task3, task4, task5, task6];
    const position = Math.floor(Math.random() * taskList.length);
    taskList[position].timeRemaining *= 3;
    expect(() => scheduler.verifyTasks(taskList)).toThrow();
  });
});
