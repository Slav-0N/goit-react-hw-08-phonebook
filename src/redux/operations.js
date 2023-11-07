// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deletingItem, addNewContact, fetchAllContacts } from 'api/api';

// axios.defaults.baseURL = `https://65352e36c620ba9358ec3d46.mockapi.io`;

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
