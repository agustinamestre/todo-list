import Task from "../models/Task";

export default interface TaskRepository {
  getTasks(): Promise<Task[]>;
  saveTask(task: Task): Promise<Task>;
  deleteTask(id: number): Promise<void>;
  updateTask(id: number, name: string, description: string): Promise<Task>;
}
