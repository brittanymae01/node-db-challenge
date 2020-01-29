const express = require("express");

const router = express.Router();

const Resources = require("./resources-model");

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      return res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem getting resources"
      });
    });
});

router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      errorMessage: "please provide a name for this resource"
    });
  }
  Resources.addResource(req.body)
    .then(resource => {
      return res.status(201).json(resource);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({
        errorMessage: "problem add resource"
      });
    });
});

router.post("/name", (req, res) => {
  let { name } = req.body;

  Resources.getResourceByName({ name })
    .then(resource => {
      if ({ name }) {
        return res.json(resource);
      }
    })
    .catch(error => {
      console.log(error);
      return res
        .status(500)
        .json({ errorMessage: "cannot get resource by the name" });
    });
});

module.exports = router;
