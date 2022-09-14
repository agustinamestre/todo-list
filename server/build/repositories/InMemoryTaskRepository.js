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
            new Task_1.default(1, "Estudio", "Estudiar JavaScript", new Date(), new Date()),
            new Task_1.default(2, "Ejercicio", "Ir la gimnasio", new Date(), new Date()),
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
        const indexTareaAEliminar = this.tasks.findIndex((e) => e.id === id);
        this.tasks.splice(indexTareaAEliminar, 1);
        return Promise.resolve();
    }
    updateTask(id, name, description) {
        const indexTareaAActualizar = this.tasks.findIndex((e) => e.id === id);
        this.tasks[indexTareaAActualizar].name = name;
        this.tasks[indexTareaAActualizar].description = description;
        return Promise.resolve(this.tasks[indexTareaAActualizar]);
    }
}
exports.default = InMemoryTaskRepository;
