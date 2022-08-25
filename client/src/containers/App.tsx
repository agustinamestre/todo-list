import React, { useState } from "react";
import "./App.css";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import TaskList from "../components/TaskList/TaskList";
import ModalTask from "../components/ModalTask/ModalTask";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { v4 as uuid } from "uuid";
import TaskModel from "../TaskModel";

function App() {
  const [currentTask, setCurrentTask] = useState<TaskModel>();
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      name: "Practicar react",
      description: "avanzar con la todo list",
    },
    {
      id: uuid(),
      name: "Hacer ejercicio",
      description: "ir a spinning y hacer abdominales",
    },
  ]);

  const handleModalClose = () => {
    setOpen(false);
    setCurrentTask(undefined);
  };

  const handleCreateTask = (id: string, name: string, description: string) => {
    if (name === "") {
      setOpen(false);
    } else {
      let newArray = [...tasks, { id, name, description }];
      setTasks(newArray);
      console.log(newArray)
    }
  };

  const handleDeleteTask = (id: string) => {
    let newArrayTasks = tasks.filter((task) => task.id !== id);
    setTasks(newArrayTasks);
  };

  const handleEditTask = (task: TaskModel) => {
    setOpen(true);
    setCurrentTask(task);
  };

  return (
    <div id="container-app">
      <CssBaseline />
      <Typography variant="h1" align="center" id="title">
        Todo List
      </Typography>
      <AddCircleOutlineIcon
        id="newTask"
        onClick={() => setOpen(true)}
        fontSize="large"
      >
        {" "}
        <svg data-testid="AddCircleOutlineIcon"> </svg>{" "}
      </AddCircleOutlineIcon>
      <TaskList
        taskArray={tasks}
        deleteTask={handleDeleteTask}
        editTask={handleEditTask}
      />
      <ModalTask
        isModalOpen={open}
        onModalClose={handleModalClose}
        handleCreate={handleCreateTask}
        task={currentTask}
      />
    </div>
  );
}

export default App;
