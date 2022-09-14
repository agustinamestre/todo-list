const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "95622",
    database: "todo-list",
  },
});

module.exports = {
  db: db,
};
