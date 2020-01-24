db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getProject,
  addProject,
  getProjectTasks,
  getProjectResources
};

function getProjects() {
  return db("projects");
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getProject(ids[0]);
    });
}

function getProjectTasks(id) {
  return db("tasks")
    .select(
      "projects.name",
      "projects.project_description",
      "tasks.task_description",
      "tasks.completed"
    )
    .join("projects", "projects.id", "tasks.project_id")
    .where("tasks.project_id", id);
}

function getProjectResources(id) {
  return db("project_details")
    .select(
      "projects.name as ProjectName",
      "resources.name as ResourceName",
      "resources.resources_description as ResourceDescription"
    )
    .join("projects", "projects.id", "project_details.project_id")
    .join("resources", "resources.id", "project_details.resources_id")
    .where("project_details.project_id", id);
}
