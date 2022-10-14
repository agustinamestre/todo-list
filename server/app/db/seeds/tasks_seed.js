/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      id: 111,
      name: "Cleaning",
      description: "bedroom and kitchen",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 222,
      name: "Code",
      description: "Finish ReactJs course",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 333,
      name: "Exercice",
      description: "Go for a run",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}


