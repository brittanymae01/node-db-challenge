const express = require("express");

const Projects = require("./project-model");
const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(project => {
      return res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: "Failed to get project" });
    });
});

router.get("/:id", (req, res) => {
  Projects.getProject(req.params.id)
    .then(project => {
      if (!project) {
        return res.status(404).json({
          errorMessage: "id does not exist"
        });
      }
      return res.json(project);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "could not retreive data"
      });
    });
});

router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      errorMessage: "please provide a name for the project"
    });
  }
  Projects.addProject(req.body)
    .then(project => {
      return res.status(201).json(project);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem adding project"
      });
    });
});

router.get("/:id/tasks", (req, res) => {
  Projects.getProjectTasks(req.params.id)
    .then(task => {
      if (!task) {
        return res.status(404).json({
          errorMessage: "id does not exist"
        });
      }
      return res.status(200).json(task);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem retreiving tasks"
      });
    });
});

router.post("/:id/tasks", (req, res) => {
  const projectInfo = { ...req.body, project_id: req.params.id };

  if (!req.body.task_description) {
    return res.status(404).json({
      errorMessage: "please provide description"
    });
  }

  Projects.getProjects(req.params.id)
    .then(project => {
      if (!project) {
        return res.status(404).json({
          errorMessage: "could not find project id"
        });
      } else {
        Tasks.addTask(projectInfo).then(task => {
          return res.status(201).json(task);
        });
      }
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem adding task"
      });
    });
});

router.get("/:id/resources", (req, res) => {
  Projects.getProjectResources(req.params.id)
    .then(resource => {
      if (!resource) {
        return res.status(404).json({
          errorMessage: "id does not exist"
        });
      }
      return res.status(200).json(resource);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem retreiving tasks"
      });
    });
});

module.exports = router;
