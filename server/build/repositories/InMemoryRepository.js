"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../models/Task"));
class InMemoryTaskRepository {
    constructor() {
        this.tasks = [
            new Task_1.default(0, "Limpieza", "limpiar habitacion", new Date(), new Date()),
            new Task_1.default(1, "Ejercicio", "Ir la gimnasio", new Date(), new Date()),
        ];
    }
    getTasks() {
        return Promise.resolve(this.tasks);
    }
    saveTask(task) {
        this.tasks.push(task);
        return Promise.resolve(task);
    }
    deleteTask(id) {
        const index = this.tasks.findIndex((e) => e.id === id);
        this.tasks.splice(index, 1);
        return Promise.resolve();
    }
    updateTask(id, name, description) {
        const index = this.tasks.findIndex((e) => e.id === id);
        this.tasks[index].name = name;
        this.tasks[index].description = description;
        return Promise.resolve(this.tasks[index]);
    }
}
exports.default = InMemoryTaskRepository;
