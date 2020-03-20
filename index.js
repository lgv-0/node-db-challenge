const express = require("express");
const server = express();

const DB = require("./data/DB");

server.use(express.json());

server.get("/", (req, res)=>
{
    res.status(200).send("ok");
});

server.listen(5000);