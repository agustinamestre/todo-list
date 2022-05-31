import React from "react";
import NewTodo from "../components/NewTodo/NewTodo";
import './App.css';
import { Typography} from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import TaskList from "../components/TaskList/TaskList";
import { taskArray } from "../taskArray";


function App() {
  
  taskArray.forEach(task => {
    task.value = task.value.toLowerCase()}
  );

  return (
    <div id="container-app">
      <CssBaseline />
      <Typography variant="h1" align="center" id="title">Todo List</Typography>
      <NewTodo/>
      <TaskList taskArray={taskArray} />
    </div>
  )
}

export default App;
