import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./ModalTask.css";
import TaskModel from "../../TaskModel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setButtonName,
  setName,
  setDescription,
} from "../../store/slices/modal/modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface ModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
  handleTask: (taskName: string, taskDescription: string) => void;
  task?: TaskModel;
}

export default function ModalTask(props: ModalProps) {
  const { buttonName } = useSelector((state: RootState) => state.modal);
  const { name } = useSelector((state: RootState) => state.modal);
  const { description } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.isModalOpen) {
      if (props.task === undefined) {
        dispatch(setButtonName("Create"));
      } else {
        dispatch(setButtonName("Edit"));
        dispatch(setName(props.task.name));
        dispatch(setDescription(props.task.description));
      }
    }
  }, [dispatch, props.isModalOpen, props.task]);

  const handleClose = () => {
    props.onModalClose();
    clear();
  };

  const handleNameChange = (event: InputEvent) => {
    let name = event.target.value;
    dispatch(setName(name));
  };

  const handleDescriptionChange = (event: InputEvent) => {
    let description = event.target.value;
    dispatch(setDescription(description));
  };

  const handleTask = () => {
    props.handleTask(name, description);
    props.onModalClose();
    clear();
  };

  const clear = () => {
    dispatch(setName(""));
    dispatch(setDescription(""));
  };

  return (
    <div>
      <Modal
        open={props.isModalOpen}
        aria-labelledby="modal-modal-title"
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="taskName">
            <TextField
              id="outlined-basic"
              placeholder="Task Name"
              variant="outlined"
              fullWidth
              autoFocus
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div id="taskDescription">
            <TextField
              id="outlined-textarea"
              placeholder="Description"
              multiline
              fullWidth
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div id="cancel">
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </div>
          <div id="create">
            <Button variant="outlined" onClick={handleTask}>
              {buttonName}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
