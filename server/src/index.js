const express = require("express");
const cors = require("cors");

const util = require("./util/util");
const PORT = util.findServerPort(8080);

const app = express();
app.use(express.json());
app.use(cors());

const taskScheduleRouter = require("./routes/taskRoutes");

app.use("/tasks", taskScheduleRouter);

app.use((req, res, next) => {
  res.status(403).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port: ${PORT}`);
});
