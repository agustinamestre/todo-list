import express = require("express");
import TaskController from "./controllers/TaskController";
import TaskRepository from "./repositories/TaskRepository";
import TaskService from "./services/TaskService";

const app  = express();
const controller = new TaskController(
    new TaskService(new TaskRepository())
);

app.use(express.json());

app.use(controller.path, controller.router);

app.listen(3000, () =>{
    console.log("app listening on port 3000");
});