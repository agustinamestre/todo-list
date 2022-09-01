import React, { useState, useEffect } from "react";
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

  //ACA MUESTRO LAS TAREAS DEL SERVER EN EL FRONT :)
  useEffect(() => {
    fetch("http://localhost:3000/tasks/")
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks))
  }, []);

  const handleModalClose = () => {
    setOpen(false);
    setCurrentTask(undefined);
  };

  const handleTask = (name: string, description: string) => {
    if (name === "") {
      setOpen(false);
    } else {
      if (currentTask === undefined) {
        fetch("http://localhost:3000/tasks/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            description: description,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              let newArray = [...tasks, data];
              setTasks(newArray);
            }
          });

      } else {
        //aca la logica del update
      }
    }
  };

  const handleEditTask = (task: TaskModel) => {
    setOpen(true);
    setCurrentTask(task);
  };

  const handleDeleteTask = (id: string) => {
    // fetch(`http://localhost:3000/tasks/${id}`, {
    //   method: "DELETE",
    // }).then((data) => {
    //   if (data) {
    //     let newArrayTasks = tasks.filter((task) => task.id !== id);
    //     setTasks(newArrayTasks);
    //     console.log(newArrayTasks);
    //   }
    // });

    // let newArrayTasks = tasks.filter((task) => task.id !== id);
    // setTasks(newArrayTasks);
  };

  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <div id="container-app">
      <CssBaseline />
      <Typography variant="h1" align="center" id="title">
        Todo List
      </Typography>
      <AddCircleOutlineIcon
        id="newTask"
        onClick={() => modalOpen()}
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
        handleTask={handleTask}
        task={currentTask}
      />
    </div>
  );
}

export default App;
