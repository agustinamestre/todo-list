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
    let id = Math.floor(Math.random() * 101);
    const newTask = new Task(id, task.name, task.description);
    this.tasks.push(newTask);
    return Promise.resolve(newTask);
  }

  deleteTask(id: number): Promise<void> {
    const index = this.tasks.findIndex((e) => e.id === id);
    
    if(index === -1){
      throw new Error(`Id ${id} not found`)
    }
    
    this.tasks.splice(index, 1);
    return Promise.resolve()
  }

  updateTask(id: number, name: string, description: string): Promise<Task> {
    const index = this.tasks.findIndex((e) => e.id === id);

    if(index === -1){
      throw new Error(`Id ${id} not found`)
    }

    this.tasks[index].name = name;
    this.tasks[index].description = description;
    return Promise.resolve(this.tasks[index]);
  }
}
