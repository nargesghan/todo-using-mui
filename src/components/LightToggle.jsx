import {  Grid } from "@mui/material";
import React from "react";
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
const LightToggle = () => {
  return (
    <Grid item sx={{paddingTop:4}}>
   <NightlightRoundSharpIcon color="primary" />
   <LightModeSharpIcon color="primary" sx={{display:"none"}}/>
    </Grid>
  );
};

export default LightToggle;
