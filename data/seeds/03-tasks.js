exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      task_description: "pick up clotes",
      notes: "make sure to organize them",
      completed: false,
      project_id: 1
    },
    {
      task_description: "frame house",
      notes: "not really sure what to write here",
      completed: false,
      project_id: 2
    },
    {
      task_description: "crack eggs",
      notes: "check for stray shells",
      completed: false,
      project_id: 3
    }
  ]);
};
