import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';

//Import MUI icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*SERCH BAR*/}
      <Box 
        display="flex" 
        backgroundColor={colors.primary[900]}
        borderRadius="1px"
      >
        <InputBase sx={{ml:2, flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{p:1}}>
          <SearchIcon/>
        </IconButton>
      </Box>
      {/*ICONS */}
      <Box display="flex">
        <IconButton title='Toogle Light' onClick={colorMode.toggleColorMode}> 
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
        <IconButton title='Notification'> <NotificationsOutlinedIcon/> </IconButton>
        <IconButton title='Setting'> <SettingsOutlinedIcon/> </IconButton>
        {/*Account Profile */}
        <IconButton title='Edit profile'> 
          <Link 
          to='/team' 
          style={{
            color: colors.grey[100],
          }}
          >
            <PersonOutlinedIcon/>
          </Link> 
        </IconButton>
      </Box>
    </Box>
  )
}