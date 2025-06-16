const Day = require("../models/Day");
const TaskListItem = require("../models/TaskListItem");
const TimeSlot = require("../models/TimeSlot");
const ScheduleRequestParser = require("../models/ScheduleRequestParser");

exports.scheduleTasks = (req, res) => {
  const parser = new ScheduleRequestParser();
  const requestBody = req.body;
  parser.parseScheduleRequest(requestBody);
  res.status(503).json({ message: "Route not in service!" });
};
