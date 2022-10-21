"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const TaskController_1 = __importDefault(require("./controllers/TaskController"));
const PostgresRepository_1 = __importDefault(require("./repositories/PostgresRepository"));
// import InMemoryRepository from "./repositories/InMemoryRepository";
const TaskService_1 = __importDefault(require("./services/TaskService"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const controller = new TaskController_1.default(new TaskService_1.default(new PostgresRepository_1.default()));
app.use(express_1.default.json());
app.use(controller.path, controller.router);
const PORT = process.env.NODE_DOCKER_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
