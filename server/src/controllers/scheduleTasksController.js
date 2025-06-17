const ScheduleRequestParser = require("../models/ScheduleRequestParser");
const TaskScheduler = require("../models/TaskScheduler");

exports.scheduleTasks = (req, res) => {
  const parser = new ScheduleRequestParser();
  const scheduler = new TaskScheduler();
  const requestBody = req.body;
  const tasks = parser.parseScheduleRequest(requestBody);
  try {
    const scheduledTaskDictionary = scheduler.scheduleTasks(tasks);
    res.status(200).json({ scheduleDictionary: scheduledTaskDictionary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
