"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let database = require("../db/knex");
class PostgresRepository {
    getTasks() {
        return Promise.resolve(database.postgres.select("*").from("tasks"));
    }
    saveTask(task) {
        const { name, description } = task;
        const createTask = database.postgres("tasks").returning("*").insert({
            name: name,
            description: description,
        });
        return Promise.resolve(createTask);
    }
    deleteTask(id) {
        const deleteTaskById = database.postgres("tasks").where({ id }).del();
        return Promise.resolve(deleteTaskById);
    }
    updateTask(id, name, description) {
        const updateTaskDB = database
            .postgres("tasks")
            .returning("*")
            .update({
            name: name,
            description: description,
        })
            .where({ id });
        return Promise.resolve(updateTaskDB);
        // const updateTaskDB = database.postgres.raw(
        //   `update tasks set name = ? description = ? updatedat = ? where id = ? returning *`,
        //   [name, description, Date.now, id]
        // );
    }
}
exports.default = PostgresRepository;
