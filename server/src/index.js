const express = require("express")
const util = require("../tests/util/util.js")
const PORT = 8080;

const app = express()
app.use(express.json())
app.get("/", (_req,res) => {
    res.json({message : "Hello world!"})
})

app.listen(PORT,() => {
    console.log("running theoretically");
})
