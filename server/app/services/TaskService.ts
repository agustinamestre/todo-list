import Task from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

export default class TaskService{
    constructor(private taskRepository: TaskRepository) {}

    getTasks(): Task[] {
        return this.taskRepository.getTasks()
    }

    createTask(name: string, description: string): Task {
        let tarea = new Task(Math.random(), name, description);
        this.taskRepository.saveTask(tarea);
        return tarea;
    }

    deleteTask(id: number)  {
        this.taskRepository.deleteTask(id);
    }

    updateTask(id: number, name: string, description: string){
        this.taskRepository.updateTask(id, name, description)
    }
}