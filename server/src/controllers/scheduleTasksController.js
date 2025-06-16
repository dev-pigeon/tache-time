const Day = require("../models/Day");
const TaskListItem = require("../models/TaskListItem");
const TimeSlot = require("../models/TimeSlot");

exports.scheduleTasks = (req, res) => {
  console.log(req.body);
  res.status(503).json({ message: "Route not in service!" });
};
