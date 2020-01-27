exports.seed = function(knex) {
  return knex("resources").insert([
    {
      name: "builder",
      resources_description: "knows how to build a house"
    },
    {
      name: "hammer",
      resources_description: "hammers nails into wood"
    },
    {
      name: "vacuum cleaner",
      resources_description: "cleans carpet"
    },
    { name: "duster", resources_description: "clears dust" },
    { name: "mixer", resources_description: "mixes ingredients" },
    { name: "oven", resources_description: "bakes things" }
  ]);
};
