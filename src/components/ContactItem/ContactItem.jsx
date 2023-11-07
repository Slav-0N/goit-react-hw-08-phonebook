import React from 'react';
import Contacts from './ContactItem.syled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { fetchTasks, deleteContact } from '../../redux/operations';

const ContactItems = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    console.log(state => state);
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <>
      {!!getFilteredContacts() > 0 && (
        <Contacts>
          {getFilteredContacts().map(el => {
            return (
              <li key={el.id}>
                {el.name}: {el.phone}
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </li>
            );
          })}
        </Contacts>
      )}
      <p></p>
    </>
  );
};

export default ContactItems;
