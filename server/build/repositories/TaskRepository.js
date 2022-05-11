"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../models/Task"));
class TaskRepository {
    constructor() {
        this.tasks = [
            new Task_1.default(1, 'orden', 'sdfsdf', new Date(), new Date())
        ];
    }
    getTasks() {
        return this.tasks;
    }
    saveTask(task) {
        this.tasks.push(task);
    }
    deleteTask(id) {
        const indexTareaAEliminar = this.tasks.findIndex(e => e.id === id);
        console.log(indexTareaAEliminar);
        this.tasks.splice(indexTareaAEliminar, 1);
    }
    updateTask(id, name, description) {
        const indexTareaAActualizar = this.tasks.findIndex(e => e.id === id);
    }
}
exports.default = TaskRepository;
