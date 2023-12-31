import { useState, useEffect } from "react";
import PageHeader from "./components/PageHeader";
import "./App.css";
import { ThemeProvider, Container, Grid } from "@mui/material";
import {lightTheme,darkTheme} from "./assets/theme.jsx";
import Task from "./components/Task";
import Summery from "./components/Summery";
import SimpleBottomNavigation from "./components/BottomNavigation";
import Box from "@mui/material/Box";

function App() {
  const [tasks, setTasks] = useState([]);
   
  const [dark,setDark]=useState(false);
 

  const display = {
    ALL: "all",
    ACTIVE: "active",
    COMPLETED: "completed",
  };
   
  const [displayOption,setDisplayOption]=useState(display.ALL);


  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks !== null ? setTasks(tasks) : setTasks([]);
  }, []);
  function updateTaskDone(id, done) {
    setTasks((prev) => {
      const copyOfTasks = [...prev];
      for(let i=0;i<copyOfTasks.length;i++){
        if(id===copyOfTasks[i].id)
        copyOfTasks[i].done=done;
      }
      return copyOfTasks;
    });
  }

  let numberOfLeftTasks = tasks.filter((t) => !t.done).length;

  function taskRemoval(id) {
    setTasks((prev) => {
      const copyOfTasks = [...prev];
      for(let i=0;i<copyOfTasks.length;i++){
        if(id===copyOfTasks[i].id){
          copyOfTasks.splice(i, 1);
        }
      }
      return copyOfTasks;
    })
  }

  function DeleteDoneTasks() {
    setTasks((prev) => {
      const copyOfTasks = tasks.filter((item) => !item.done);
      return copyOfTasks;
    });
  }

 function renameTask(newName,id){
  setTasks((prev) => {
    const copyOfTasks = [...prev];
    for(let i=0;i<copyOfTasks.length;i++){
      if(id===copyOfTasks[i].id){
        copyOfTasks[i].name=newName;
      }
    }
    return copyOfTasks;
  });
 }

 function themeChanger(){
  setDark(!dark);
  
 }
  return (
    <>
      <ThemeProvider theme={dark?darkTheme:lightTheme}>
        <PageHeader setTasks={setTasks} setDark={themeChanger} mode={dark?darkTheme.palette.mode:lightTheme.palette.mode} />
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: "100vh",
            margin: 0,
          }}
        >
          <Container sx={{ width: "99%",position:'relative',bottom:{xs:'25px', sm:'40px'} }}>
            {displayOption === display.COMPLETED
              ? tasks
                  .filter((task) => task.done)
                  .map((task, index) => {
                    return (
                      <Task
                        key={task.id}
                        name={task.name}
                        done={task.done}
                        onDelete={() => taskRemoval(task.id)}
                        onClick={(done) => {
                          console.log(index);
                          updateTaskDone(task.id, done);
                          
                        }}
                        onRename={(newName)=>renameTask(newName,task.id)}
                      />
                    );
                  })
              : displayOption === display.ACTIVE
              ? tasks
                  .filter((task) => !task.done)
                  .map((task, index) => {
                    return (
                      <Task
                        key={task.id}
                        name={task.name}
                        done={task.done}
                        onDelete={() => taskRemoval(task.id)}
                        onClick={(done) => {
                          updateTaskDone(task.id, done);
                        }}
                        onRename={(newName)=>renameTask(newName,task.id)}
                      />
                    );
                  })
              : tasks.map((task, index) => {
                  return (
                    <Task
                      key={task.id}
                      name={task.name}
                      done={task.done}
                      onDelete={() => taskRemoval(task.id)}
                      onClick={(done) => {
                        updateTaskDone(task.id, done);
                      }}
                      onRename={(newName)=>renameTask(newName,task.id)}
                    />
                  );
                })}

       
            <Summery
              numberOfLeftTasks={numberOfLeftTasks}
              DeleteDoneTasks={DeleteDoneTasks}
            />
          </Container>

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <SimpleBottomNavigation  setDisplayOption={setDisplayOption}/>
          </Grid>
          {/* <Typography>Drag and Drop to render list</Typography> */}
        </Box>
      </ThemeProvider>
    </>
  );
}



export default App;
