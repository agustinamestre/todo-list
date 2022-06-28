import * as React from "react";
import { Checkbox, Box } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./Task.css"
import TaskModel from "../../TaskModel";

interface TaskProps {
  task: TaskModel
}

export default function Task(props: TaskProps) {
  const {name} = props.task

  return (
    <div id="container-task">
      <Checkbox  />
      <Box id="taskName" component="div" sx={{ display: 'inline', p: 1, m: 1,
          color: (theme: any) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme: any) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          width: 400
        }}
      >
        {name}
      </Box>
      <EditIcon><svg data-testid="EditIcon" id="EditIcon"></svg> </EditIcon>
      <DeleteIcon><svg data-testid="DeleteIcon" id="DeleteIcon"></svg> </DeleteIcon>
    </div>
  );
}
