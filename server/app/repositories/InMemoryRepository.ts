import Task from "../models/Task";
import TaskRepository from "./TaskRepository";

export default class InMemoryTaskRepository implements TaskRepository {
  private readonly tasks = [
    new Task(0, "Limpieza", "limpiar habitacion", new Date(), new Date()),
    new Task(1, "Ejercicio", "Ir la gimnasio", new Date(), new Date()),
  ];

  getTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  saveTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return Promise.resolve(task);
  }

  deleteTask(id: number): Promise<void> {
    const index = this.tasks.findIndex((e) => e.id === id);
    this.tasks.splice(index, 1);
    return Promise.resolve()
  }

  updateTask(id: number, name: string, description: string): Promise<Task> {
    const index = this.tasks.findIndex((e) => e.id === id);

    if(index === -1){
      throw new Error(`No se encontro la tarea con id ${id}`)
    }

    this.tasks[index].name = name;
    this.tasks[index].description = description;
    return Promise.resolve(this.tasks[index]);

    return Promise.resolve(this.tasks[0])
  }
}
