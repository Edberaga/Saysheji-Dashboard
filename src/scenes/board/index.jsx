import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';

const Board = () => {
  return (
    <>
    <main className="content">
      <Box m="20px">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </main>
    </>
  )
}

export default Board;