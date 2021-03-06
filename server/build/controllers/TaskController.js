"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
        this.path = '/tasks';
        this.router = express.Router();
        this.getTasks = (request, response) => {
            response.send(this.taskService.getTasks());
        };
        this.createTask = (request, response) => {
            const { name, description } = request.body;
            response.send(this.taskService.createTask(name, description));
        };
        this.deleteTask = (request, response) => {
            const id = +request.params.id;
            response.send(this.taskService.deleteTask(id));
        };
        this.updateTask = (request, response) => {
            const id = +request.params.id;
            const { name, description } = request.body;
            response.send(this.taskService.updateTask(id, name, description));
        };
        this.router.get("", this.getTasks);
        this.router.post("", this.createTask);
        this.router.delete("/:id", this.deleteTask);
        this.router.put("/:id", this.updateTask);
    }
}
exports.default = TaskController;
