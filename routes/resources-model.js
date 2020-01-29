db = require("../data/dbConfig");

module.exports = {
  getResources,
  getResource,
  addResource,
  addResourceToProject,
  getResourceByName
};

function getResources() {
  return db("resources");
}

function getResource(id) {
  return db("resources")
    .where({ id })
    .first();
}

function getResourceByName(filter) {
  return db("resources")
    .select("id", "name")
    .where(filter)
    .first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      return getResource(ids[0]);
    });
}

function addResourceToProject(info) {
  return db("project_details")
    .insert(info)
    .then(ids => {
      return ids;
    })
    .catch(error => {
      console.log(error);
    });
}
