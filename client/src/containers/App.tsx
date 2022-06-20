import React, { useState } from "react";
import './App.css';
import { Typography} from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import TaskList from "../components/TaskList/TaskList";
import { taskArray } from "../taskArray";
import ModalTask from "../components/ModalTask/ModalTask";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function App() {
  const [open, setOpen] = useState(false);

  taskArray.forEach(task => {
    task.value = task.value.toLowerCase()}
  );

  const handleModalClose = () => {
    setOpen(false)
  }

  return (
    <div id="container-app" >
      <CssBaseline />
      <Typography variant="h1" align="center" id="title">Todo List</Typography>
      <AddCircleOutlineIcon  id="newTask" onClick={() => setOpen(true)} fontSize="large"> <svg data-testid="AddCircleOutlineIcon"> </svg> </AddCircleOutlineIcon>
      <TaskList taskArray={taskArray} />
      <ModalTask isModalOpen={open}  onModalClose={handleModalClose}/>
    </div>
  )
}

export default App;
