import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../global/Sidebar';
import { Topbar } from '../global/Topbar';

const Board = () => {
  return (
    <>
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Box m="20px">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </main>
    </>
  )
}

export default Board;