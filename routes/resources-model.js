db = require("../data/dbConfig");

module.exports = {
  getResources,
  getResource,
  addResource
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
