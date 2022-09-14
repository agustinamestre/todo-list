import React, { useState, useEffect } from "react";
import "./App.css";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import TaskList from "../components/TaskList/TaskList";
import ModalTask from "../components/ModalTask/ModalTask";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TaskModel from "../TaskModel";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

function App() {
  const [currentTask, setCurrentTask] = useState<TaskModel>();
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: "Practicar react",
      description: "avanzar con la todo list",
    },
  ]);

  //ACA MUESTRO LAS TAREAS DEL SERVER EN EL FRONT :)
  useEffect(() => {
    try {
      fetch("http://localhost:3000/tasks/")
        .then((response) => response.json())
        .then((tasks) => setTasks(tasks));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleTask = (name: string, description: string) => {
    if (name === "") {
      setOpen(false);
    } else {
      if (currentTask === undefined) {
        try {
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
        } catch (error) {
          console.error(error);
        }
      } else {
        let id = currentTask.id;
        try {
          fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: name,
              description: description,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                let newArray = [...tasks];
                const index = tasks.findIndex((e) => e.id === id);
                newArray[index].name = name;
                newArray[index].description = description;
                setTasks(newArray);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleEditTask = (task: TaskModel) => {
    setOpen(true);
    setCurrentTask(task);
  };

  const handleDeleteTask = (id: number) => {
    try {
      fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      }).then((data) => {
        if (data) {
          let newArrayTasks = tasks.filter((task) => task.id !== id);
          setTasks(newArrayTasks);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClose = () => {
    setOpen(false);
    setCurrentTask(undefined);
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
      <ErrorBoundary>
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
      </ErrorBoundary>
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
