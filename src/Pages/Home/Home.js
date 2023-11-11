import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box
        component="section"
        sx={{ p: 2, border: 'thick double #1ca30d', mt: '50px' }}
      >
        <Typography variant="h2" textAlign={'center'}>
          Please login to work with your contacts
          <Typography textAlign={'center'}>
            or press "Display my contacts" button!
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
