import React from 'react'
import Container from "@mui/material/Container";
import { BorderTop } from '@mui/icons-material';
import Typography from "@mui/material/Typography";
const Summery = ({numberOfLeftTasks}) => {
  return (
    <Container
    sx={{
      backgroundColor: "#FAFAFA",
      marginTop: 0,
      display: "flex",
      alignItems: "center",
      height:50,
      borderRadius:1,
      borderTopStyle:"solid",
      borderTopWidth:1,
      borderTopColor:"grey.300",
      maxWidth:500
    }}
  >
    <Typography variant='summery' component={"p"} sx={{flexGrow:1}}>{numberOfLeftTasks} iems left</Typography>
    <Typography variant='summery' component={"p"}>Clear Completed</Typography>
  </Container>
  )
}

export default Summery