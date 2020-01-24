const express = require("express");

const router = express.Router();

const Tasks = require("./tasks-model");

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      return res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem getting tasks"
      });
    });
});

module.exports = router;
