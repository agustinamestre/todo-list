/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      id: 1,
      name: "jjjj",
      description: "jjjjj",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "jjjj",
      description: "jjjjj",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "jjjj",
      description: "jjjjj",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}


