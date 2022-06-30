import React, { useState } from "react";
import './App.css';
import { Typography} from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import TaskList from "../components/TaskList/TaskList";
import ModalTask from "../components/ModalTask/ModalTask";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuid } from "uuid";

function App() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {id: uuid(), name: "lalalala", description: "lalalalala"},
    {id: uuid(), name: "peeeepepepe", description: "peeepepepepe"},
    {id: uuid(), name: "nanananana", description: "nanananananana"}
  ])

  tasks.forEach(task => {
    task.name = task.name.toLowerCase()}
  );

  const handleModalClose = () => {
    setOpen(false)
  }

  const handleCreateTask = (id : string, name: string, description: string ) => {
    setTasks([...tasks, {id, name, description}])
  }

     const handleDeleteTask = (id: string) => {
       let newArrayTasks =  tasks.filter((task) => task.id !== id)
       setTasks(newArrayTasks)
   }

  return (
    <div id="container-app" >
      <CssBaseline />
      <Typography variant="h1" align="center" id="title">Todo List</Typography>
      <AddCircleOutlineIcon  id="newTask" onClick={() => setOpen(true)} fontSize="large"> <svg data-testid="AddCircleOutlineIcon"> </svg> </AddCircleOutlineIcon>
      <TaskList taskArray={tasks} deleteTask= {handleDeleteTask} />
      <ModalTask isModalOpen={open}  onModalClose={handleModalClose} handleCreate={handleCreateTask} />
    </div>
  )
}

export default App;
