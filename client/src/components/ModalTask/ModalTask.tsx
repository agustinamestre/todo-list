import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./ModalTask.css"

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

interface TaskProps {
  isModalOpen: boolean;
  onModalClose: () => void
}

export default function ModalTask (props:TaskProps) {

  const handleClose = () => {
    props.onModalClose()
  }

  return (
    <div>
      <Modal open={props.isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div id="taskName">
          <TextField id="outlined-basic" placeholder="Task Name" variant="outlined" fullWidth />
          </div>
          <div id="taskDescription">
          <TextField id="outlined-textarea" placeholder="Description" multiline fullWidth/>
          </div>
          <div id="cancel">
          <Button  variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
          </div>
          <div id="create">
          <Button variant="outlined">Create</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}