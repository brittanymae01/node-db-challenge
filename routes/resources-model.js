db = require("../data/dbConfig");

module.exports = {
  getResources,
  getResource,
  addResource,
  addResourceToProject
};

function getResources() {
  return db("resources");
}

function getResource(id) {
  return db("resources")
    .where({ id })
    .first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      return getResource(ids[0]);
    });
}

function addResourceToProject(projectId, resourceId) {
  return db("project_details")
    .insert(projectId, resourceId)
    .then(ids => {
      return ids;
    })
    .catch(error => {
      console.log(error);
    });
}
