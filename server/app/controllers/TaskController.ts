import TaskService from "../services/TaskService";
import * as express from "express";
import IController from "./IController";

class TaskController implements IController {
    
    public readonly path = '/tasks';
    public readonly router = express.Router();

    constructor(private taskService: TaskService) {
        this.router.get("", this.getTasks);
        this.router.post("", this.createTask);
    }

    getTasks = (request: express.Request, response: express.Response) => {
        response.send(this.taskService.getTasks())
    }

    createTask = (request: express.Request, response: express.Response) => {
        const {name, description} = request.body;
        response.send(this.taskService.createTask(name, description))

    }
}

export default TaskController;



