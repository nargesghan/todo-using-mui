import { useState } from 'react'
import PageHeader from './components/PageHeader';
import './App.css'
import { ThemeProvider } from '@mui/material';
import theme from "./assets/theme.jsx";

function App() {


  return (
    <>
    <ThemeProvider theme={theme}><PageHeader/></ThemeProvider>
    </>
  )
}

export default App
