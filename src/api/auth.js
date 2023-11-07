import axios from 'axios';
// axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const userAxios = axios.create({
  baseURL: `https://connections-api.herokuapp.com`,
});

export const signUp = async body => {
  const { data } = await userAxios.post(`/users/signup`, body);
  return data;
};
