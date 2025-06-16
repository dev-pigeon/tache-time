const express = require("express");
const router = express.Router();

const scheduleTasksController = require("../controllers/scheduleTasksController");

router.post("/schedule", scheduleTasksController.scheduleTasks);

module.exports = router;
