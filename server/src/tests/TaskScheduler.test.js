const Task = require("../models/Task.js");
const TaskScheduler = require("../models/TaskScheduler.js");

describe("TaskScheduler verifies correctly tasks ", () => {
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
    taskList[4].timeRemaining = 1000;
    expect(() => scheduler.verifyTasks(taskList)).toThrow();
  });
});

describe("TaskScheduler correctly schedules tasks", () => {
  let scheduler;
  let task1;
  let task2;
  let task3;
  let task4;
  let task5;

  beforeEach(() => {
    scheduler = new TaskScheduler();
    task1 = new Task("Task1", "t1", 3, 2);
    task2 = new Task("Task2", "t2", 5, 3);
    task3 = new Task("Task3", "t3", 6, 3);
    task4 = new Task("Task4", "t4", 6, 2);
    task5 = new Task("Task5", "t5", 9, 3);
  });

  test("Simple two task scheduling", () => {
    const taskList = [task1, task2];
    const expectedOrder = ["Task1", "Task1", "Task2", "Task2", "Task2"];
    const workUnits = scheduler.scheduleTasks(taskList);
    for (let i = 0; i < workUnits.length; ++i) {
      const unit = workUnits[i];
      expect(unit.name).toBe(expectedOrder[i]);
    }
  });

  test("Interleaving tasks", () => {
    const taskList = [task3, task4, task5];
    const expectedOrder = [
      "Task3",
      "Task3",
      "Task4",
      "Task3",
      "Task4",
      "Task5",
      "Task5",
      "Task5",
    ];
    const workUnits = scheduler.scheduleTasks(taskList);
    for (let i = 0; i < workUnits.length; ++i) {
      const unit = workUnits[i];
      expect(unit.name).toBe(expectedOrder[i]);
    }
  });
});
