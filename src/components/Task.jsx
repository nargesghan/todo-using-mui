import React from 'react'
import CheckButton from './CheckButton'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Task = ({name , done,onClick,onDelete}) => {
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
  <CheckButton checked={done} onClick={()=>onClick(!done)}/>
    <Typography  variant="task" component="p" sx={{paddingLeft:1,flexGrow:1,textDecoration:done&&"line-through",color:done&&"grey.400"}}>{name}</Typography>
    <CloseOutlinedIcon onClick={onDelete} sx={{ color: "grey.400" }}/>
  </Container>
  )
}

export default Task