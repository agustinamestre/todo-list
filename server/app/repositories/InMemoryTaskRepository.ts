import Task from "../models/Task";
import TaskRepository from "./TaskRepository";
let database = require("../knex");

export default class InMemoryTaskRepository implements TaskRepository {
  private readonly tasks = [
    new Task(0, "Limpieza", "limpiar habitacion", new Date(), new Date()),
    new Task(1, "Estudio", "Estudiar JavaScript", new Date(), new Date()),
    new Task(2, "Ejercicio", "Ir la gimnasio", new Date(), new Date()),
  ];

  getTasks(): Promise<Task[]> {
    return Promise.resolve(database.postgres.select("*").from("tasks"));
  }

  saveTask(task: Task): Promise<Task> {
    const { name, description } = task;
    const createTask = database.postgres("tasks").returning("*").insert({
      name: name,
      description: description,
    });
    return Promise.resolve(createTask);
  }

  deleteTask(id: number): Promise<void> {
    const deleteTaskById = database.postgres("tasks").where({ id }).del();
    return Promise.resolve(deleteTaskById);
  }

  updateTask(id: number, name: string, description: string): Promise<Task> {
    const updateTaskDB = database
      .postgres("tasks")
      .returning("*")
      .update({
        name: name,
        description: description,
      })
      .where({ id });

    // const updateTaskDB = database.postgres.raw(
    //   `update tasks set name = ? description = ? updatedat = ? where id = ? returning *`,
    //   [name, description, Date.now, id]
    // );

    return Promise.resolve(updateTaskDB);
  }
}
