const ScheduleRequestParser = require("../models/ScheduleRequestParser");
const Day = require("../models/Day");
const TaskListItem = require("../models/TaskListItem");
const dayjs = require("dayjs");
const TimeSlot = require("../models/TimeSlot");

function createMockDays(numDays) {
  let days = [];
  let today = dayjs();
  for (let i = 0; i < numDays; ++i) {
    let day = new Day(`day${0}`, "monday", today.toISOString(), [
      new TimeSlot(today.toISOString(), true),
    ]);
    days.push(day);
  }
  return days;
}

test("getDayIndex returns the correct index", () => {
  const parser = new ScheduleRequestParser();
  const days = createMockDays(5);
  const taskListItem = new TaskListItem(
    "test task",
    "Jun 15",
    "11:00 AM",
    1,
    undefined,
    "taskID",
    dayjs().add(2, "days").toISOString()
  );

  const expectedIndex = 2;
  const dayIndex = parser.getDayIndex(taskListItem, days);
  expect(dayIndex).toBe(expectedIndex);
});
