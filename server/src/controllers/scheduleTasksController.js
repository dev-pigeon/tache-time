const ScheduleRequestParser = require("../models/ScheduleRequestParser");
const TaskScheduler = require("../models/TaskScheduler");

exports.scheduleTasks = (req, res) => {
  const parser = new ScheduleRequestParser();
  const scheduler = new TaskScheduler();
  const requestBody = req.body;
  const tasks = parser.parseScheduleRequest(requestBody);
  const scheduledTaskDictionary = scheduler.scheduleTasks(tasks);
  console.log(scheduledTaskDictionary);
  res.status(503).json({ message: "Route not in service!" });
};
