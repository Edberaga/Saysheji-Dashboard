import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';
import profilePic from '../../assets/img/user-profile.png'
import './styles.scss'

const Message = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
  <>
  <Box className='message'>
    <Box className="messageInfo">
    <img
      style={{
        width: "50px", height: "50px",
        borderRadius: "50%"
      }}
      src={profilePic} 
      alt=""
    />
    </Box>
    <Box 
      className="messageContent"
      sx={{
        backgroundColor: colors.blueAccent[700]
      }}
    >
      <p>Message</p>
      <Typography 
        variant='span' 
        style={{
        textAlign: "right"
      }}>
        Just now
      </Typography>
    </Box>
  </Box>

  <Box className='message owner'>
    <Box className="messageInfo">
    <img
      style={{
        width: "50px", height: "50px",
        borderRadius: "50%"
      }}
      src={profilePic} 
      alt=""
    />
    </Box>
    <Box 
      className="messageContent"
      sx={{
        backgroundColor: colors.primary[900]
      }}
    >
      <img src={profilePic} alt="" />
      <Typography 
        variant='span' 
        style={{
        textAlign: "right"
      }}>
        Just now
      </Typography>
    </Box>
  </Box>
  </>
  )
}

export default Message