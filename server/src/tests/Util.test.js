const util = require("../util/util");
const Task = require("../models/Task.js");

describe("Can find a valid port", () => {
  test("findServerPort rejects restricted port", () => {
    expect(() => util.findServerPort(1)).toThrow();
  });

  test("findServerPort does not throw error for input within valid range", () => {
    expect(() => util.findServerPort(8080)).not.toThrow();
  });

  test("findServerPort returns valid port", () => {
    const port = util.findServerPort(8080);
    expect(port).toBeGreaterThanOrEqual(8080);
  });

  test("findServerPort throws error when port > 64,000", () => {
    expect(() => util.findServerPort(64001)).toThrow();
  });
});

test("createTaskDictionary creates correct dictionary", () => {
  const task1 = new Task("Task1", "t1", 6, 2);
  const task2 = new Task("Task2", "t2", 6, 3);
  const task3 = new Task("task3", "t3", 12, 2);
  const task4 = new Task("task4", "t4", 12, 2);
  const taskList = [task1, task2, task3, task4];

  const dictionary = util.createTaskDictionary(taskList);
  expect(dictionary[6][0].equals(task1)).toBe(true);
  expect(dictionary[6][1].equals(task2)).toBe(true);
  expect(dictionary[12][0].equals(task3)).toBe(true);
  expect(dictionary[12][1].equals(task4)).toBe(true);
});
