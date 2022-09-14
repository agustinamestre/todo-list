import Task from "../models/Task";
import TaskRepository from "./TaskRepository";
import knex from "knex";

export default class InMemoryTaskRepository implements TaskRepository {
  private readonly tasks = [
    new Task(0, "Limpieza", "limpiar habitacion", new Date(), new Date()),
    new Task(1, "Estudio", "Estudiar JavaScript", new Date(), new Date()),
    new Task(2, "Ejercicio", "Ir la gimnasio", new Date(), new Date()),
  ];

  getTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  saveTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return Promise.resolve(task);
  }

  deleteTask(id: number): Promise<void> {
    const indexTareaAEliminar = this.tasks.findIndex((e) => e.id === id);
    this.tasks.splice(indexTareaAEliminar, 1);
    return Promise.resolve();
  }

  updateTask(id: number, name: string, description: string): Promise<Task> {
    const indexTareaAActualizar = this.tasks.findIndex((e) => e.id === id);
    this.tasks[indexTareaAActualizar].name = name;
    this.tasks[indexTareaAActualizar].description = description;
    return Promise.resolve(this.tasks[indexTareaAActualizar]);
  }
}
