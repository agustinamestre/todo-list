import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./SubmitForm.css";

export default function SubmitForm() {
  return (
    <div id="container-submitForm">
      <TextField id="standard-basic" label="Task name" variant="standard" />
      <TextField
        id="standard-basic"
        label="Task description"
        variant="standard"
      />
      <Button variant="outlined">Agregar</Button>
    </div>
  );
}
