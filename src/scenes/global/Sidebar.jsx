import { React, useState }from 'react'
import { ProSidebar, Menu, MenuItem  } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import userProfile from '../../assets/img/user-profile.jpg'

//MUI Icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem 
      active ={selected === title} 
      style={{color: colors.grey[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false); //Represent where the sidebar will collapse or not.
  const [selected, setSelected] = useState(); //Determine what page we select and currently at. (Dashboard) as the default
  
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[500]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item" : {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: `${colors.blueAccent[400]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.blueAccent[500]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/*LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                alt="profile-user"
                width="100px"
                height="100px"
                src={userProfile}
                style={{
                  cursor: "pointer", 
                  borderRadius: "50%",
                  backgroundImage: `url(${userProfile})`,
                  backgroundSize: 'cover',
                }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant='h5'
                  color={colors.grey[100]}
                  fontWeight="600"
                  sx={{ m: "10px 0 0 0"}}
                >
                  User Name
                </Typography>
                <Typography 
                  variant='h6' 
                  color={colors.blueAccent[500]}
                >
                  User Position
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Main
            </Typography>

            <Item 
              title="Dashboard"
              to="/"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Lists
            </Typography>
            <Item 
              title="Project"
              to="/project"
              icon={<AssignmentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Teams"
              to="/team"
              icon={<AssignmentIndOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Clients"
              to="/client"
              icon={<AccountBoxOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Service
            </Typography>

            <Item 
              title="Message"
              to="/message"
              icon={<ForumOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Calendar"
              to="/calendar"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar