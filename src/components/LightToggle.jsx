import {  Grid } from "@mui/material";
import React from "react";
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
const LightToggle = ({themeChange,mode}) => {
  return (
    <Grid item sx={{paddingTop:4,cursor:"pointer"}}>
   <NightlightRoundSharpIcon onClick={themeChange}  sx={{display:mode==="dark"?"none":"dark",color:"#FAFAFA"}}/>
   <LightModeSharpIcon onClick={themeChange}  sx={{display:mode==="dark"?"block":"none",color:'#FAFAFa'}}/>
    </Grid>
  );
};

export default LightToggle;
