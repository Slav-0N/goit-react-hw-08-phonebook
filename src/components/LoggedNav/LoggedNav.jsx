import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Button, Box } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
// import ChildCareIcon from '@mui/icons-material/ChildCare';

const linkStyle = {
  fontWeight: 600,
  fontSize: '34px',
  textDecoration: 'none',
  color: '#000000',
};

const buttonStyle = {
  width: '200px',
  backgroundColor: '#11e16f',
  color: '#fdfdfd',
  '&:hover, &:focus': {
    backgroundColor: '#1ca30d',
  },
};

const LoggedNav = () => {
  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <List>
        <ListItem>
          <Link to="/login" style={linkStyle}>
            <Button sx={buttonStyle}>
              <LoginIcon sx={{ mr: '70px' }} />
              Login
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/register" style={linkStyle}>
            <Button sx={buttonStyle}>
              <AppRegistrationIcon sx={{ mr: '50px' }} />
              Sign Up
            </Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default LoggedNav;
