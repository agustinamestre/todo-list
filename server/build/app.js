"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const TaskController_1 = __importDefault(require("./controllers/TaskController"));
const InMemoryTaskRepository_1 = __importDefault(require("./repositories/InMemoryTaskRepository"));
const TaskService_1 = __importDefault(require("./services/TaskService"));
const app = express();
app.use(cors());
const controller = new TaskController_1.default(new TaskService_1.default(new InMemoryTaskRepository_1.default()));
app.use(express.json());
app.use(controller.path, controller.router);
app.listen(3000, () => {
    console.log("app listening on port 3000");
});
