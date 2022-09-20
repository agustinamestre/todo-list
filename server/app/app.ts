import express = require("express");
const cors = require("cors");
import TaskController from "./controllers/TaskController";
import InMemoryTaskRepository from "./repositories/InMemoryTaskRepository";
import TaskService from "./services/TaskService";

const app = express();
app.use(cors());
const controller = new TaskController(
  new TaskService(new InMemoryTaskRepository())
);

app.use(express.json());

app.use(controller.path, controller.router);

app.listen(3000, () => {
  console.log("app listening on port 3000");
});