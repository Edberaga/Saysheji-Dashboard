import { Box, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';
import { Search } from './Search';
import { Chats } from './Chats';

export const Chatbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
  <Box style={{
    borderRadius: "15px 0px 0px 15px",
    backgroundColor: colors.blueAccent[800],
    width: "360px",
    height: "100%",
    padding: "5px 0px"
  }}>
    <Search/>
    <Chats/>
  </Box>
  )
}
