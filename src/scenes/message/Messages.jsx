import React from 'react'
import Message from './Message'
import { Box } from '@mui/material'

const Messages = () => {
  
  return (
    <Box sx={{
      padding: "10px",
      height: "calc(100% - 100px)",
      overflowY: "scroll"
    }}>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </Box>
  )
}

export default Messages