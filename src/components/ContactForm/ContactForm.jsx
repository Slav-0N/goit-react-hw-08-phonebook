import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { Notify } from 'notiflix';
import { useState } from 'react';

export const ContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;

    if (contacts.some(contact => contact.name === formName)) {
      Notify.failure(`${formName} is already in contacts`);
      return;
    }

    if (contacts.some(contact => contact.number === formNumber)) {
      Notify.failure(`${formNumber} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully added to contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    onCloseModal();
    form.reset();
  };

  return (
    <Paper elevation={3} style={{ padding: '100px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction={'column'}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              required
              placeholder="Search name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Number"
              variant="outlined"
              name="number"
              required
              placeholder="Search number "
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              margin: '25px auto',
              display: 'block',
              justifyContent: 'center',
              background: 'turquoise',
            }}
          >
            Create new contact
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};
