import { useState, useEffect } from "react";
import PageHeader from "./components/PageHeader";
import "./App.css";
import { ThemeProvider, Container, Grid } from "@mui/material";
import {lightTheme,darkTheme} from "./assets/theme.jsx";
import Task from "./components/Task";
import Box from "@mui/material/Box";
import Summery from "./components/Summery";
import SimpleBottomNavigation from "./components/BottomNavigation";

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
  function updateTaskDone(updateIndex, done) {
    setTasks((prev) => {
      const copyOfTasks = [...prev];
      copyOfTasks[updateIndex].done = done;
      return copyOfTasks;
    });
  }

  let numberOfLeftTasks = tasks.filter((t) => !t.done).length;

  function taskRemoval(index) {
    setTasks((prev) => {
      const copyOfTasks = [...prev];
      copyOfTasks.splice(index, 1);
      return copyOfTasks;
    });
  }

  function DeleteDoneTasks() {
    setTasks((prev) => {
      const copyOfTasks = tasks.filter((item) => !item.done);
      return copyOfTasks;
    });
  }

 function renameTask(newName,index){
  setTasks((prev) => {
    const copyOfTasks = [...prev];
    copyOfTasks[index].name=newName;
    return copyOfTasks;
  });
 }

 function themeChanger(){
  console.log(dark);
  setDark(!dark);
  console.log(dark);
 }
  return (
    <>
      <ThemeProvider theme={dark?darkTheme:lightTheme}>
        <PageHeader tasks={tasks} setTasks={setTasks} setDark={themeChanger} mode={dark?darkTheme.palette.mode:lightTheme.palette.mode} />
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: "100vh",
            margin: 0,
          }}
        >
          <Container sx={{ width: "99%" }}>
            {displayOption === display.COMPLETED
              ? tasks
                  .filter((task) => task.done)
                  .map((task, index) => {
                    return (
                      <Task
                        key={task.id}
                        name={task.name}
                        done={task.done}
                        onDelete={() => taskRemoval(index)}
                        onClick={(done) => {
                          updateTaskDone(index, done);
                        }}
                        onRename={(newName)=>renameTask(newName,index)}
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
                        onDelete={() => taskRemoval(index)}
                        onClick={(done) => {
                          updateTaskDone(index, done);
                        }}
                        onRename={(newName)=>renameTask(newName,index)}
                      />
                    );
                  })
              : tasks.map((task, index) => {
                  return (
                    <Task
                      key={task.id}
                      name={task.name}
                      done={task.done}
                      onDelete={() => taskRemoval(index)}
                      onClick={(done) => {
                        updateTaskDone(index, done);
                      }}
                      onRename={(newName)=>renameTask(newName,index)}
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
