import React from 'react'
import { Typography, Box, useTheme, Button } from '@mui/material';
import { tokens } from '../theme';
import { padding } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


const Header = ({ title, subtitle, button, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [user] = useAuthState(auth);
  
  return (
    <Box mb="20px">
      <Box style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box>
          <Typography 
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
          >
              {title}
          </Typography>
          <Typography
          variant="h5"
          color={colors.blueAccent[400]}
          >
              {subtitle}
          </Typography>
        </Box>
        
        {user.uid == "aUOhWeqqRhgX4ZYaPnwmgiAQtN83" && button != null
        ? <Box>
          <Link to={link}>
            <Button
              style={{
                color: colors.blueAccent[300],
                border: `2px solid ${colors.blueAccent[300]}`,
                padding: '5px 15px',
              }}
              startIcon={<PersonAddIcon/>}
            >
              {button}
            </Button>
          </Link>
        </Box>
        : ''
        }
      </Box>
    </Box>

  )
}

export default Header