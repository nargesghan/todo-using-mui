import React, { useState } from "react";
import CheckButton from "./CheckButton";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { TextField, Tooltip } from "@mui/material";
const Task = ({ name, done, onClick, onDelete, onRename }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        marginTop: 0,
        display: "flex",
        alignItems: "center",
        height: 50,
        borderRadius: 1,
        maxWidth: 500,
        width: {
          // theme.breakpoints.up('xs')
          md: 500,
        },
        borderRadius: 0.5,
        borderTopStyle: "solid",
        borderTopWidth: 1,
        borderTopColor: "secondary.main",//grey.300
       
      }}
    >
      <CheckButton checked={done} onClick={() => onClick(!done)} />
      {!editMode && (
        <Typography
          variant="task"
          component="p"
          onClick={() => setEditMode(!editMode)}
          sx={{
            paddingLeft: 1,
            flexGrow: 1,
            textDecoration: done && "line-through",
            color: done && "secondary.dark",
            cursor: "pointer",
          }}
        >
          {name}
        </Typography>
      )}
      {editMode && (
        <form
          style={{ flexGrow: 1 }}
          onSubmit={(ev) => {
            ev.preventDefault();
            setEditMode(false);
          }}
        >
          <TextField
            onChange={(ev) => onRename(ev.target.value)}
            autoFocus
            InputProps={{
              disableUnderline: true,
            }}
            variant="standard" // <== changed this
            margin="normal"
            sx={{
              paddingLeft: 2,
              "& input::placeholder": {
                fontSize: 15,
              },
            }}
            defaultValue={name}
          />
        </form>
      )}

      <CloseOutlinedIcon
        onClick={onDelete}
        className="close-icon"
        sx={{ color: "secondary.main", cursor: "pointer", }}
      />
    </Container>
  );
};

export default Task;
