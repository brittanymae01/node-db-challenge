exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "Clean room",
      project_description: "make room spotless",
      completed: false
    },
    {
      name: "Build house",
      project_description: "build a house",
      completed: false
    },
    {
      name: "Bake a cake",
      project_description: "bake a cake from scratch",
      completed: false
    }
  ]);
};
