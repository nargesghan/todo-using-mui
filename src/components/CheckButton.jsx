import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SvgIcon } from '@mui/material';
const CheckButton = () => {
  return (
    <SvgIcon >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#57DDFF" />
        <stop offset="100%" stopColor="#C058F3" />
      </linearGradient>
    </defs>
    <CheckCircleIcon sx={{ fill: 'url(#gradient)' }} />
  </SvgIcon>
  )
}

export default CheckButton