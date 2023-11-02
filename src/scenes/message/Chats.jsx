import React from 'react'
import profilePic from '../../assets/img/user-profile.png'
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

export const Chats = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{
        padding: "10px", 
        display: "flex",
        alignItems: "center",
        '&:hover': {
          backgroundColor: colors.blueAccent[900],
          opacity: [0.75],
        },
      }}
      >
        <img
        style={{
          width: "50px", height: "50px",
          borderRadius: "50%"
        }}
        src={profilePic} 
        alt="" />
        <Box style={{padding: "0px 10px"}}>
          <Typography>Edbert Lim</Typography>
          <Typography style={{color: colors.grey[300], padding: "0px"}}>
            Good Morning Sir
          </Typography>
        </Box>
    </Box>
  )
}