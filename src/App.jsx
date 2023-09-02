import { useState } from "react";
import PageHeader from "./components/PageHeader";
import "./App.css";
import { ThemeProvider,Container,Grid } from "@mui/material";
import theme from "./assets/theme.jsx";
import Task from "./components/Task";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Summery from "./components/Summery";
import SimpleBottomNavigation from "./components/BottomNavigation";

function App() {
  const [tasks,setTasks]=useState([]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageHeader tasks={tasks} setTasks={setTasks} />
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: "100vh",
            margin: 0,
          }}
        >
         
            <Container sx={{width:"99%"}}>
       
              {tasks.map((item , index)=>{
                return <Task key={index} name={item.name} done={item.done}/>
              })}
              <Summery />
           
            </Container>
          

            <Grid container  direction="column" alignItems="center" justifyContent="center">
            <SimpleBottomNavigation />
          </Grid>
          {/* <Typography>Drag and Drop to render list</Typography> */}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
