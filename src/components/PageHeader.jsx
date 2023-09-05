
import React from "react";
import headerImageLight from "../assets/images/bg-mobile-light.jpg";
import headerImageDark from "../assets/images/bg-mobile-dark.jpg";
import headerImageLightsm from "../assets/images/bg-desktop-light.jpg";
import headerImageDarksm from "../assets/images/bg-desktop-dark.jpg";
import { Container, Typography, Grid } from "@mui/material";
import LightToggle from "./LightToggle";
import TaskInput from "./TaskInput";
import Box from "@mui/material/Box";
const PageHeader = ({setTasks,setDark,mode}) => {
  function AddTask(name){
    setTasks(prev=>[...prev,{name,done:false,id:Date.now()}])
  }
  return (
    <>
      <Box
        sx={{
          backgroundImage:{xs:mode === "light"
          ? `url(${headerImageLight})`
          : `url(${headerImageDark})`,
        sm:mode === "light"
        ? `url(${headerImageLightsm})`
        : `url(${headerImageDarksm})`
        },
            
          width: "100%",
          height: 200,
          margin: 0,
          
        }}
      >
       
        <Container   sx={{width:"99%"}}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth={'450px'}
            sx={{
              marginLeft: 'auto',
              marginRight: 'auto'}}
          >
            {" "}
            <Typography
              sx={{
                fontWeight: 700,
                letterSpacing: 10,
                fontSize: 30,
                color: "#FAFAFA",
                paddingTop: 5,
              }}
              variant="h1"
              component={"h1"}
            >
              TODO
            </Typography>
            <LightToggle themeChange={setDark} mode={mode} />
          </Grid>

          <TaskInput onAdd={AddTask}/>
        </Container>
      </Box>
    </>
  );
};

export default PageHeader;
