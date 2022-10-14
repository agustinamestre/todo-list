"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let database = require("../db/knex");
class PostgresRepository {
    getTasks() {
        return Promise.resolve(database.select("*").from("tasks"));
    }
    saveTask(task) {
        const { name, description } = task;
        const createTask = database("tasks").returning("*").insert({
            name: name,
            description: description,
        });
        return Promise.resolve(createTask);
    }
    deleteTask(id) {
        const deleteTaskById = database("tasks").where({ id }).del();
        return Promise.resolve(deleteTaskById);
    }
    updateTask(id, name, description) {
        const updateTaskDB = database("tasks")
            .returning("*")
            .update({
            name: name,
            description: description,
            updated_at: new Date()
        })
            .where({ id });
        return Promise.resolve(updateTaskDB);
    }
}
exports.default = PostgresRepository;
