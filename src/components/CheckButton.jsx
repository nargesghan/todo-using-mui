import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SvgIcon } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
const CheckButton = ({checked=false ,onClick}) => {

  const handleCheck=()=>{!checked}
  return (
    <div onClick={onClick}>
    {checked && (<SvgIcon onClick={handleCheck}>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#57DDFF" />
        <stop offset="100%" stopColor="#C058F3" />
      </linearGradient>
    </defs>
    <CheckCircleIcon sx={{ fill: 'url(#gradient)' }} />
  </SvgIcon>)}
   {!checked && (<PanoramaFishEyeIcon onClick={handleCheck} sx={{ color: "grey.300" }}/>)}
 
  </div>
  )
}

export default CheckButton