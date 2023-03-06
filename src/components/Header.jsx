import React from 'react'
import { Typography, Box, useTheme, Button } from '@mui/material';
import { tokens } from '../theme';
import { padding } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Header = ({ title, subtitle, button }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
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
        
        
        <Box>
          <Button
            variant="contained" 
            style={{
              color: colors.blueAccent[300],
              border: `2px solid ${colors.blueAccent[300]}`,
              padding: '5px 15px',
            }}
            startIcon={<PersonAddIcon/>}
          >
            {button}
          </Button>
        </Box>
      </Box>
    </Box>

  )
}

export default Header