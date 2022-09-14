import Task from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

export default class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async getTasks() {
    return await this.taskRepository.getTasks();
  }

  async createTask(name: string, description: string) {
    const task = new Task(Math.random(), name, description);
    await this.taskRepository.saveTask(task);
    return task;
  }

  async deleteTask(id: number) {
    await this.taskRepository.deleteTask(id);
  }

  async updateTask(id: number, name: string, description: string) {
    return await this.taskRepository.updateTask(id, name, description);
  }
}