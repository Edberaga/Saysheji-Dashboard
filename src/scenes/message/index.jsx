import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../global/Sidebar';
import { Topbar } from '../global/Topbar';

const Message = () => {
  return (
    <>
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Box m="20px">
        <Header title="MESSAGE" subtitle="Communicate with Teams and Clients" />
      </Box>
    </main>
    </>
  )
}

export default Message;