import React from 'react'
import CheckButton from './CheckButton'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Task = ({name , done}) => {
  return (
    <Container
    sx={{
      backgroundColor: "primary.main",
      marginTop: 0,
      display: "flex",
      alignItems: "center",
      height:50,
      borderRadius:1,
      maxWidth:500
    }}
  >
    <CheckButton defaultChecked={done}/>
    <Typography  variant="task" component="p" sx={{paddingLeft:2,flexGrow:1}}>{name}</Typography>
    <CloseOutlinedIcon  sx={{ color: "grey.400" }}/>
  </Container>
  )
}

export default Task