import * as React from "react";
import TaskModel from "../../TaskModel";
import Task from "../Task/Task";

interface TaskListProps {
  taskArray: TaskModel[];
  deleteTask: (id: number) => void;
  editTask: (task: TaskModel) => void;
}

export default function TaskList(props: TaskListProps) {
  const deleteTask = (id: number) => {
    props.deleteTask(id);
  };

  const editTask = (task: TaskModel) => {
    props.editTask(task);
  };

  

  const tasksArray = props.taskArray.map((elem: TaskModel) => (
    <Task
      key={elem.id}
      task={elem}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  return <div>{tasksArray}</div>;
}
