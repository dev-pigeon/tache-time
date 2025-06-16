const express = require("express");
const cors = require("cors");

const util = require("./util/util");
const PORT = util.findServerPort(8080);

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", (_req, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port: ${PORT}`);
});
