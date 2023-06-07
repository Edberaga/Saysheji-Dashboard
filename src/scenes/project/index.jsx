import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../global/Sidebar';
import { Topbar } from '../global/Topbar';

const Project = () => {
  return (
    <>
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Box m="20px">
        <Header title="PROJECT" subtitle="View your Projects and Tasks List" />
      </Box>
    </main>
    </>
  )
}

export default Project