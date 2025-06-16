const ScheduleRequestParser = require("../models/ScheduleRequestParser");

exports.scheduleTasks = (req, res) => {
  const parser = new ScheduleRequestParser();
  const requestBody = req.body;
  const tasks = parser.parseScheduleRequest(requestBody);
  res.status(503).json({ message: "Route not in service!" });
};
