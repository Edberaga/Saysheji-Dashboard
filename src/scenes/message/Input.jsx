import { Box, Button, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';

import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Input = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
  <Box sx={{
    height: "50px",
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}>
    <input 
      type="text" 
      placeholder='Type a message' 
      id=""
      style={{
        width: "100%",
        padding: "5px 0px",
        border: "none",
        outline: "none"
      }} 
    />
    <div style={{
      gap: "10px",
      display: "flex",
      alignItems: "center"
    }}>
      <label htmlFor="file">
        <InsertLinkIcon/>
      </label>
      <input type="file" style={{display: "none"}} id="file" />
      <label htmlFor="file">
        <AddPhotoAlternateIcon/>
      </label>
      <Button 
        variant="contained" 
        style={{backgroundColor: colors.blueAccent[600]}}
      >
        Send
      </Button>
    </div>
  </Box>
  )
}

export default Input