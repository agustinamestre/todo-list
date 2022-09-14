"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const knex = require("knex");
exports.db = knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "95622",
        database: "todo-list",
    },
});
