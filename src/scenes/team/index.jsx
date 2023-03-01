import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from "../../data/mockData";
import React from 'react';
import Header from '../../components/Header';

const Team = () => {
  return (
    <Box m="20px">
      <Header title="TEAMS" subtitle="View your Workplace teams here and they current task" />
    </Box>
  )
}

export default Team;