const express = require("express")
const util = require("./util/util")
const PORT = util.findServerPort(8080);

const app = express()
app.use(express.json())
app.get("/", (_req,res) => {
    res.json({message : "Hello world!"})
})

app.listen(PORT,() => {
    console.log("running theoretically");
})
