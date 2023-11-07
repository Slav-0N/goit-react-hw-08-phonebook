import axios from 'axios';

// axios.defaults.baseURL = `https://65352e36c620ba9358ec3d46.mockapi.io`;

const phoneAxios = axios.create({
  baseURL: `https://65352e36c620ba9358ec3d46.mockapi.io`,
});

export const fetchAllContacts = async () => {
  const { data } = await phoneAxios.get(`/contacts`);
  return data;
};

export const deletingItem = async id => {
  const { data } = await phoneAxios.delete(`/contacts/${id}`);
  return data;
};

export const addNewContact = async newContactData => {
  const { data } = await phoneAxios.post(`/contacts/`, newContactData);
  return data;
};
