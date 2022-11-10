import React, { useEffect } from "react";
import "./App.css";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import TaskList from "../components/TaskList/TaskList";
import ModalTask from "../components/ModalTask/ModalTask";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TaskModel from "../TaskModel";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Config from "../config.json";
import { RootState } from "../store";
import { setTasks, setcurrentTask } from "../store/slices/tasks/tasksSlice";
import { setOpen } from "../store/slices/modal/modal";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const baseURL = Config.BASE_URL;

  const { initialTasksState } = useSelector((state: RootState) => state.tasks);
  const { currentTask } = useSelector((state: RootState) => state.tasks);
  const { open } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      fetch(`${baseURL}/tasks/`)
        .then((response) => response.json())
        .then((tasks) => dispatch(setTasks(tasks)));
    } catch (error) {
      console.error(error);
    }
  }, [baseURL, dispatch]);

  const handleTask = (name: string, description: string) => {
    if (name === "") {
      dispatch(setOpen(false));
    } else {
      if (currentTask === undefined) {
        try {
          fetch(`${baseURL}/tasks/`, {
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
                let newArray = [...initialTasksState, data];
                dispatch(setTasks(newArray));
              }
            });
        } catch (error) {
          console.error(error);
        }
      } else {
        let id = currentTask.id;
        try {
          fetch(`${baseURL}/tasks/${id}`, {
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
                let newArray = [...initialTasksState];
                const index = newArray.findIndex((e) => e.id === id);
                newArray[index].name = name;
                newArray[index].description = description;
                dispatch(setTasks(newArray));
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleEditTask = (task: TaskModel) => {
    dispatch(setOpen(true));
    dispatch(setcurrentTask(task));
  };

  const handleDeleteTask = (id: number) => {
    try {
      fetch(`${baseURL}/tasks/${id}`, {
        method: "DELETE",
      }).then((data) => {
        if (data) {
          let newArrayTasks = initialTasksState.filter(
            (task) => task.id !== id
          );
          dispatch(setTasks(newArrayTasks));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClose = () => {
    dispatch(setOpen(false));
    dispatch(setcurrentTask(undefined));
  };

  const modalOpen = () => {
    dispatch(setOpen(true));
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
          taskArray={initialTasksState}
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
