import * as React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./NewTodo.css";

export default function NewTodo () {

return(
    <div id="container-newTodo">
      <AddCircleOutlineIcon fontSize="large"><svg data-testid="AddCircleOutlineIcon"></svg></AddCircleOutlineIcon>
    </div>
)
}