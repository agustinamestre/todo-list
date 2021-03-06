import React, {useState} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./ModalTask.css"
import { v4 as uuid } from "uuid";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type InputEvent = React.ChangeEvent<HTMLInputElement>

interface TaskProps {
  isModalOpen: boolean;
  onModalClose: () => void
  handleCreate: (id: string, taskName: string, taskDescription: string) => void
}

export default function ModalTask (props:TaskProps) {
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  
  const handleClose = () => {
    props.onModalClose()
  }

  const handleNameChange = (event: InputEvent) => {
    const name = event.target.value;
    setName(name);
  }
  
  const handleDescriptionChange = (event: InputEvent) => {
    const description = event.target.value;
    setDescription(description);
  }
  
  const handleCreate = () => {
    props.handleCreate(uuid(), name, description);
    props.onModalClose()
    clear()
  }
  
  const clear = () => {
    setName("")
    setDescription("")
  }

  return (
    <div>
      <Modal open={props.isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div id="taskName">
          <TextField id="outlined-basic" placeholder="Task Name" variant="outlined" fullWidth autoFocus value={name} onChange={handleNameChange}/>
          </div>
          <div id="taskDescription">
          <TextField id="outlined-textarea" placeholder="Description" multiline fullWidth value={description} onChange={handleDescriptionChange} />
          </div>
          <div id="cancel">
          <Button  variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
          </div>
          <div id="create">
          <Button variant="outlined" onClick={handleCreate}>Create</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}