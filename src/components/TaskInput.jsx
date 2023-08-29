import { Container, TextField } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const TaskInput = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#FAFAFA",
        marginTop: 5,
        display: "flex",
        alignItems: "center",
        height:50,
        borderRadius:1
      }}
    >
      <AddCircleOutlineIcon color="secondary" />
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
        sx={{ paddingLeft:2}}
      />
    </Container>
  );
};

export default TaskInput;
