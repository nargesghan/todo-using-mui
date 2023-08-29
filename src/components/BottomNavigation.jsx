import * as React from 'react';
import Container from '@mui/material/Container';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from "@mui/material/Typography";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
 const styleOfButton={
  fontWeight: 700,
    fontSize: 18,
    fontFamily: ["Josefin Sans", "Arial", "sans-serif"].join(","),
    color:"#9e9e9e",
    backgroundColor:"primary.main"
}
  
  return (
    <Container
    sx={{
      backgroundColor: "primary.main",
      marginTop: 5,
      display: "flex",
      alignItems: "center",
      height:45,
      borderRadius:1,
      maxWidth:500,
      overflow: "hidden",
    }}
  >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{height:"100%"}}
      >
      
       <BottomNavigationAction label="All" sx={{...styleOfButton}}  />
        <BottomNavigationAction label="Active" sx={{...styleOfButton}} />
        <BottomNavigationAction label="Completed" sx={{...styleOfButton}} />
      </BottomNavigation>
    </Container>
  );
}