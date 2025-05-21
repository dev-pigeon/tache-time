const Task = require("../models/Task.js")


test("Can correctly decrement timeRemaining", () => {
    const testTask = new Task("Test", "This is a test task", 10,10);
    const expectedTR = 9;
    testTask.decrementTimeRemaining();
    expect(testTask.timeRemaining).toBe(expectedTR);

})