import TaskService from "../services/TaskService";
import * as express from "express";
import IController from "./IController";

export default class TaskController implements IController {
  public readonly path = "/tasks";
  public readonly router = express.Router();

  constructor(private taskService: TaskService) {
    this.router.get("", this.getTasks);
    this.router.post("", this.createTask);
    this.router.delete("/:id", this.deleteTask);
    this.router.put("/:id", this.updateTask);
  }

  getTasks = async (response: express.Response) => {
    response.send(await this.taskService.getTasks());
  };

  createTask = async (request: express.Request, response: express.Response) => {
    const { name, description } = request.body;
    response.send(await this.taskService.createTask(name, description));
  };

  deleteTask = async (request: express.Request, response: express.Response) => {
    const id = +request.params.id;

    try {
      const task = await this.taskService.deleteTask(id);
      response.send(task);
    } catch (err: any) {
      response.status(404).json({ message: err.message });
    }
  };

  updateTask = async (request: express.Request, response: express.Response) => {
    const id = +request.params.id;
    const { name, description } = request.body;
    try {
      const task = await this.taskService.updateTask(id, name, description);
      response.send(task);
    } catch (err: any) {
      response.status(404).json({ message: err.message });
    }
  };
}
