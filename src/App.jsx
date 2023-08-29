import { useState } from "react";
import PageHeader from "./components/PageHeader";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme.jsx";
import Task from "./components/Task";
import  Container  from "@mui/material/Container";
import Box from "@mui/material/Box"
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PageHeader />
        <Box
        sx={{
        
          backgroundColor:"primary.light",
          width: "100%",
          height: 200,
          margin: 0,
        }}
      >
        <Container><Task /></Container>
        </Box>
        
      </ThemeProvider>
    </>
  );
}

export default App;
