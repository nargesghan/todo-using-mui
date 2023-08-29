import { Container, TextField } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const TaskInput = () => {


  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        marginTop: 5,
        display: "flex",
        alignItems: "center",
        height:45,
        borderRadius:1,
        maxWidth:500
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
