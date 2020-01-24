const express = require("express");

const ProjectRouter = require("./routes/project-router");
const ResourcesRouter = require("./routes/resources-router");
const TaskRouter = require("./routes/tasks-router");

const server = express();

server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TaskRouter);

// server.get("/", (req, res) => {
//   res.send("<h1>hello</h1>");
// });

module.exports = server;
