import Task from "../models/Task";

export default class TaskRepository {

     private readonly tasks = [
        new Task(1, 'orden', 'sdfsdf', new Date(), new Date())
    ]

    getTasks() : Task[] {
        return this.tasks
    }

}

