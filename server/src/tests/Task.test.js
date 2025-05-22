const Task = require("../models/Task.js");

test("Can correctly decrement timeRemaining", () => {
  const testTask = new Task("Test", "This is a test task", 10, 10);
  const expectedTR = 9;
  testTask.decrementTimeRemaining();
  expect(testTask.timeRemaining).toBe(expectedTR);
});

describe("Equals Method", () => {
  let task1;
  let task2;

  beforeEach(() => {
    task1 = new Task("task1", "t1", 1, 1);
    task2 = new Task("task2", "t2", 4, 6);
  });

  test("Equal method returns true for two identical tasks", () => {
    expect(task1.equals(task1)).toBe(true);
  });

  test("Equal method returns false for two different tasks", () => {
    expect(task1.equals(task2)).toBe(false);
  });
});
