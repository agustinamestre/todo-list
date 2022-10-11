import express from "express";
import cors from "cors";
import TaskController from "./controllers/TaskController";
import PostgresRepository from "./repositories/PostgresRepository";
import TaskService from "./services/TaskService";
require("dotenv").config();

const app = express();
app.use(cors());
const controller = new TaskController(
  new TaskService(new PostgresRepository())
);

app.use(express.json());

app.use(controller.path, controller.router);

const PORT = process.env.NODE_DOCKER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
