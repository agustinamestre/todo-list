import Task from "../models/Task";

export default class TaskRepository {

     private readonly tasks = [
        new Task(0, "Limpieza", "limpiar habitacion", new Date(), new Date()),
        new Task(1, "Estudio", "Estudiar JavaScript", new Date(), new Date()),
        new Task(2, "Ejercicio", "Ir la gimnasio", new Date(), new Date()),
        new Task(3, "Trabajar", "Ir a la panderia", new Date(), new Date())
    ];

    getTasks() : Task[] {
        return this.tasks;
    }

    saveTask(task: Task) {
       this.tasks.push(task);
    }

    deleteTask(id: number){
       const indexTareaAEliminar =  this.tasks.findIndex(e => e.id === id);
       this.tasks.splice(indexTareaAEliminar, 1);
    }

    updateTask(id: number, name: string, description: string){
      const indexTareaAActualizar =  this.tasks.findIndex(e => e.id === id);
      this.tasks[indexTareaAActualizar].name = name;
      this.tasks[indexTareaAActualizar].description = description;
    }
} 