import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';

const Message = () => {
  return (
    <>
    <main className="content">
      <Box m="20px">
        <Header title="MESSAGE" subtitle="Communicate with Teams and Clients" />
      </Box>
    </main>
    </>
  )
}

export default Message;