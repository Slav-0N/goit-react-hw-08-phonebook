import { useDispatch } from 'react-redux';

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';

import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

import { deleteContact } from 'redux/contacts/operations';

import { Notify } from 'notiflix';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name}  The contact was deleted`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });
  };

  return (
    <ListItem key={id}>
      <ListItemText
        primary={
          <>
            <AccountBoxTwoToneIcon
              fontSize="large"
              style={{ marginRight: '8px' }}
            />
            {name}
          </>
        }
        secondary={
          <>
            <PhoneInTalkTwoToneIcon
              fontSize="large"
              style={{ marginRight: '8px' }}
            />
            {number}
          </>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDeleteContact(id)}
        >
          <DeleteForeverTwoToneIcon fontSize="large" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
