import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';

const Client = () => {
  return (
    <Box m="20px">
      <Header title="CLIENTS" subtitle="View and Manage Clients" button="ADD CLIENT" link="/client/newClient"/>
    </Box>
  )
}

export default Client;