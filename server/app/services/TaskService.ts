import Task from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

export default class TaskService{
    constructor(private taskRepository: TaskRepository) {}

    getTasks(): Task[] {
        return this.taskRepository.getTasks()
    }

}