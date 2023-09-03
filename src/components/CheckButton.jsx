import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SvgIcon } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { styled } from '@mui/material/styles';

const CheckButton = ({checked=false ,onClick}) => {
  const StyledIcon = styled(PanoramaFishEyeIcon)({
    '&:hover': {
      fill: 'url(#gradient)', // set the fill color to the gradient on hover
    },
  });
  const handleCheck=()=>{!checked}
  return (
    <div style={{height:"24px",cursor:"pointer"}}onClick={onClick}>
    {checked && (<SvgIcon onClick={handleCheck}>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#57DDFF" />
        <stop offset="100%" stopColor="#C058F3" />
      </linearGradient>
    </defs>
    <CheckCircleIcon sx={{ fill: 'url(#gradient)' }} />
  </SvgIcon>)}
   {/* {!checked && (<PanoramaFishEyeIcon onClick={handleCheck} sx={{ color: "secondary.main" }}/>)} */}
   {!checked &&   <div style={{height:"24px",cursor:"pointer"}}>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#57DDFF" />
      <stop offset="100%" stopColor="#C058F3" />
    </linearGradient>
  </defs>
  <StyledIcon onClick={handleCheck} sx={{ color: 'secondary.main',width: 24, height: 24  }} />
  </div>}
 
  </div>
  )
}

export default CheckButton