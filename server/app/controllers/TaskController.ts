import TaskService from "../services/TaskService";
import * as express from "express";
import IController from "./IController";

class TaskController implements IController {
  public readonly path = "/tasks";
  public readonly router = express.Router();

  constructor(private taskService: TaskService) {
    this.router.get("", this.getTasks);
    this.router.post("", this.createTask);
    this.router.delete("/:id", this.deleteTask);
    this.router.put("/:id", this.updateTask);
  }

  getTasks = async (request: express.Request, response: express.Response) => {
    response.send(await this.taskService.getTasks());
  };

  createTask = async (request: express.Request, response: express.Response) => {
    const { name, description } = request.body;
    response.send(await this.taskService.createTask(name, description));
  };

  deleteTask = async (request: express.Request, response: express.Response) => {
    const id = +request.params.id;
    response.send(await this.taskService.deleteTask(id));
  };

  updateTask = async (request: express.Request, response: express.Response) => {
    const id = +request.params.id;
    const { name, description } = request.body;
    response.send(await this.taskService.updateTask(id, name, description));
  };
}

export default TaskController;
