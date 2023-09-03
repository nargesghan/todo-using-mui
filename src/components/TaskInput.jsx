import { Container, TextField } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import IconButton from "@mui/material/IconButton";
const TaskInput = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          backgroundColor: "primary.main",
          marginTop: 5,
          display: "flex",
          alignItems: "center",
          height: 45,
          borderRadius: 1,
          maxWidth: 500,
        }}
      >
        <IconButton type="submit">
          <AddCircleOutlineIcon sx={{ color: "secondary.main" }} />
        </IconButton>

        <TextField
          variant="standard" // <== changed this
          margin="normal"
          id="phoneNumber"
          name="phoneNumber"
          autoComplete="nothing"
          autoFocus
          placeholder="Create a new todo..."
          InputProps={{
            disableUnderline: true,
          }}
          value={taskName}
          onChange={(ev) => {
            setTaskName(ev.target.value);
          }}
          sx={{
            paddingLeft: 2,
            "& input::placeholder": {
              fontSize: 15,
            },
          }}
        />
      </Container>
    </form>
  );
};

export default TaskInput;
