import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Box, Container } from '@mui/system';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar>
      <Container
        sx={{
          display: 'flex',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            paddingBottom: '30px',
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'underline overline #15eb6e',
              color: 'teal',
              margin: '25px 0 125px 100px',
            }}
            sx={{ bgcolor: 'pink', margin: '25px 0 0 100px' }}
          >
            <Typography variant="h2" sx={{ scale: 1.1 }}>
              Phonebook
            </Typography>
          </Link>
        </Typography>
        {isLoggedIn && (
          <Box ml="sm">
            <Button
              component={Link}
              to="/contacts"
              size="large"
              sx={{
                bgcolor: 'pink',
                margin: '50px 0 0 300px',
                width: '300px',
              }}
            >
              Display my contacts
            </Button>
          </Box>
        )}
      </Container>
    </Toolbar>
  );
};

export default Navigation;
