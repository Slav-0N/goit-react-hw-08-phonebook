import { createAsyncThunk } from '@reduxjs/toolkit';
import { deletingItem, addNewContact, fetchAllContacts } from 'api/api';

export const fetchTasks = createAsyncThunk('contacts/fetchTasks', async () => {
  const response = await fetchAllContacts();

  return response;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (num, { rejectWithValue }) => {
    try {
      const data = await deletingItem(num);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newCont => {
    const response = await addNewContact(newCont);
    return response;
  }
);
