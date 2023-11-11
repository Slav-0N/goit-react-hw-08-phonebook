import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import {
  Container,
  Typography,
  Button,
  Modal,
  Grid,
  Box,
  CircularProgress,
} from '@mui/material';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';

import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <Container sx={{ width: '600px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            marginTop="50px"
            // display="flex"
            // alignItems="center"
            // justifyContent="space-between"
          >
            <Typography variant="h3" align="center">
              Your contacts
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={2}
              marginTop={4}
            >
              <Filter />
              <Button
                variant="contained"
                color="inherit"
                onClick={handleOpenModal}
                sx={{ width: '500px' }}
              >
                Add contact
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {isLoading && !error && <CircularProgress />}
          <ContactList />
        </Grid>
      </Grid>
      <Modal open={isShowModalAddUser} onClose={handleOpenModal}>
        <Box>
          <ContactForm onCloseModal={handleOpenModal} />
        </Box>
      </Modal>
    </Container>
  );
};

export default Contacts;
