const ScheduleRequestParser = require("../models/ScheduleRequestParser");
const Day = require("../models/Day");
const TaskListItem = require("../models/TaskListItem");
const dayjs = require("dayjs");
const TimeSlot = require("../models/TimeSlot");

function createMockDays(numDays) {
  let days = [];
  let today = dayjs().hour(15).minute(0).second(0).millisecond(0);
  for (let i = 0; i < numDays; ++i) {
    let day = new Day(`day${0}`, "monday", today.toISOString(), [
      new TimeSlot(today.toISOString(), true),
      new TimeSlot(today.add(1, "hour").toISOString(), true),
      new TimeSlot(today.add(3, "hour").toISOString(), true),
    ]);
    days.push(day);
    today = today.add(1, "day");
  }
  return days;
}

test("getDayIndex returns the correct index", () => {
  const parser = new ScheduleRequestParser();
  const days = createMockDays(5);
  const taskItemDay = dayjs()
    .hour(15)
    .minute(0)
    .second(0)
    .millisecond(0)
    .add(2, "days");

  const taskListItem = new TaskListItem(
    "test task",
    "Jun 15",
    "11:00 AM",
    1,
    undefined,
    "taskID",
    taskItemDay.toISOString()
  );

  const expectedIndex = 2;
  const dayIndex = parser.getDayIndex(taskListItem, days);
  expect(dayIndex).toBe(expectedIndex);
});

test("getTimeTillDue works as expected", () => {
  const parser = new ScheduleRequestParser();
  const days = createMockDays(5);
  const taskItemDay = dayjs()
    .hour(17)
    .minute(0)
    .second(0)
    .millisecond(0)
    .add(2, "days");

  const taskListItem = new TaskListItem(
    "test task",
    "Jun 15",
    "5:00 PM",
    1,
    undefined,
    "taskID",
    taskItemDay.toISOString()
  );
  const dayIndex = parser.getDayIndex(taskListItem, days);
  const expectedTimeTillDue = 8;
  const actualTimeTillDue = parser.getTimeTillDue(taskListItem, days, dayIndex);
  expect(actualTimeTillDue).toBe(expectedTimeTillDue);
});

test("getSlotsInDay works as expected", () => {
  const parser = new ScheduleRequestParser();
  const days = createMockDays(5);
  const taskItemDay = dayjs()
    .hour(17)
    .minute(0)
    .second(0)
    .millisecond(0)
    .add(2, "days");

  const taskListItem = new TaskListItem(
    "test task",
    "Jun 15",
    "5:00 PM",
    1,
    undefined,
    "taskID",
    taskItemDay.toISOString()
  );
  const expectedSlotsInDay = 2;
  const actualSlotsInDay = parser.getSlotsInDay(days[2], taskListItem);
  expect(actualSlotsInDay).toBe(expectedSlotsInDay);
});

test("accumulatePreviousDaySlots works properly", () => {
  const parser = new ScheduleRequestParser();
  const days = createMockDays(5);
  const taskItemDay = dayjs()
    .hour(17)
    .minute(0)
    .second(0)
    .millisecond(0)
    .add(2, "days");

  const expectedSlots = 6;
  const actualSlots = parser.accumulatePreviousTimeSlots(days, 2);
  expect(actualSlots).toBe(expectedSlots);
});
