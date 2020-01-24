exports.seed = function(knex) {
  return knex("project_details").insert([
    { project_id: 1, resources_id: 3 },
    { project_id: 1, resources_id: 4 },
    { project_id: 2, resources_id: 1 },
    { project_id: 2, resources_id: 2 },
    { project_id: 3, resources_id: 5 },
    { project_id: 3, resources_id: 6 }
  ]);
};
