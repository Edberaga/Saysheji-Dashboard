import React, { useState } from 'react'
import profilePic from '../../assets/img/user-profile.png'
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

export const Search = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  
  return (
    
  <Box sx={{
    borderBottom: "1px solid", 
    borderColor: colors.primary[700],
  }}>
    <section style={{
      margin: "5px 10px 0px 10px",
      padding: "5px 0px"
    }}>
      <input 
      type="text" 
      style={{
        backgroundColor: "transparent",
        border: "none", outline: "none",
        color: colors.primary[200],
      }} 
      placeholder='Find an User'/>
    </section>
    
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
  </Box>
  )
}