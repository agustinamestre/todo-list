"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../models/Task"));
let database = require("../knex");
class InMemoryTaskRepository {
    constructor() {
        this.tasks = [
            new Task_1.default(0, "Limpieza", "limpiar habitacion", new Date(), new Date()),
            new Task_1.default(1, "Estudio", "Estudiar JavaScript", new Date(), new Date()),
            new Task_1.default(2, "Ejercicio", "Ir la gimnasio", new Date(), new Date()),
        ];
    }
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
        // const updateTaskDB = database
        //   .postgres("tasks")
        //   .returning("*")
        //   .update({
        //     name: name,
        //     description: description,
        //   })
        //   .where({ id });
        const updateTaskDB = database.postgres.raw(`update tasks set name = ? description = ? updatedat = ? where id = ? returning *`, [name, description, Date.now, id]);
        return Promise.resolve(updateTaskDB);
    }
}
exports.default = InMemoryTaskRepository;
