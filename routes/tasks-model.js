db = require("../data/dbConfig");

module.exports = {
  getTasks,
  getTask,
  addTask
};

function getTasks() {
  return db("tasks");
}

function getTask(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return getTask(ids[0]);
    });
}
