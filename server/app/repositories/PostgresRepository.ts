import Task from "../models/Task";
import TaskRepository from "./TaskRepository";
let database = require("../db/knex");

export default class PostgresRepository implements TaskRepository {
  
  getTasks(): Promise<Task[]> {
    return Promise.resolve(database.select("*").from("tasks"));
  }

  saveTask(task: Task): Promise<Task> {
    const { name, description } = task;
    const createTask = database("tasks").returning("*").insert({
      name: name,
      description: description,
    });
    return Promise.resolve(createTask);
  }

  deleteTask(id: number): Promise<void> {
    const deleteTaskById = database("tasks").where({ id }).del();
    return Promise.resolve(deleteTaskById);
  }

  updateTask(id: number, name: string, description: string): Promise<Task> {
    const updateTaskDB = database("tasks")
      .returning("*")
      .update({
        name: name,
        description: description,
        updated_at: new Date()
      })
      .where({ id });

    return Promise.resolve(updateTaskDB);
  }
}
