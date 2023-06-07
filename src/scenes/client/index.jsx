import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../global/Sidebar';
import { Topbar } from '../global/Topbar';

const Client = () => {
  return (
    <>
    <Sidebar/>
    <main className="content">
      <Topbar/>
      <Box m="20px">
        <Header title="CLIENTS" subtitle="View and Manage Clients" button="ADD CLIENT" link="/client/newClient"/>
      </Box>
    </main>
    </>

    
  )
}

export default Client;