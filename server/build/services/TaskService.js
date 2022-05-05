"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../models/Task"));
class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    getTasks() {
        return this.taskRepository.getTasks();
    }
    createTask(name, description) {
        let tarea = new Task_1.default(Math.random(), name, description);
        this.taskRepository.saveTask(tarea);
        return tarea;
    }
}
exports.default = TaskService;
