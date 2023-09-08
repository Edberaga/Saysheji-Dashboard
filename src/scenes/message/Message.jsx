import { Box, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';
import './styles.scss'

const Message = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
  <>
  <Box sx={{
    backgroundColor: colors.blueAccent[800],
    padding: "10px",
    margin: "0px 5vw 10px 15px",
    borderRadius: "2.5px",
    display: "flex",
  }}>
      Message
  </Box>
  </>
  )
}

export default Message