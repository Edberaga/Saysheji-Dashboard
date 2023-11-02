import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { Chatbar } from './Chatbar';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import Messages from './Messages';
import Input from './Input';
import './styles.scss'

const ChatApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
  <>
  <Box m="20px">
    <Header title="MESSAGE" subtitle="Communicate with Teams and Clients" />
  </Box>
  <Box style={{
    borderRadius: "10px",
    backgroundColor: colors.blueAccent[900],
    margin: "10px",
    height: "70vh",
    display: "flex",
    
  }}>
    <Chatbar/>

    <Box style={{ 
      width: "100%"
    }}>
      <section style={{
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.blueAccent[600],
        padding: "10px 15px",
        borderRadius: "0px 10px 0px 0px",
        height: "50px"
      }}>
        <Typography>Edbert Lim</Typography>
        <VideoCallIcon/>
      </section>

      <section style={{
        height: "100%"
      }}>
        <Messages/>
        <Input/>
      </section>
    </Box>
  </Box>
  </>
  )
}

export default ChatApp;