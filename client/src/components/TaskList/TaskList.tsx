import * as React from "react";
import TaskModel from "../../TaskModel";
import Task from "../Task/Task";

interface TaskProps {
    taskArray: TaskModel[]
    deleteTask: (id: string) => void
  }

export default function TaskList (props: TaskProps) {

   const deleteTask = (id: string) => {
        props.deleteTask(id)
   }


    const tasksArray = props.taskArray.map((elem: TaskModel) => <Task key={elem.id} task={elem} deleteTask= {deleteTask}/>)

    return(
        <div>
            {tasksArray}
        </div>
    )
}