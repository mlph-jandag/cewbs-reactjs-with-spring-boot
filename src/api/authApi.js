import axios from 'axios'
import { API_URL, STORAGE_NAME } from '../config/AppConfig';

export const login = async (email, password) =>  {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/admin/login`, {
      email,
      password,
    })
    .then((response) => {
      const { token } = response.data;
      if (token) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(response.data));
      }
      resolve(response.data);
    })
    .catch(err => {
      console.log(err);
      // if(err.response.status == 403) {
      //   reject('You do not have permission.');
      // } else {
      //   reject('Email address and password are mismatched!');
      // }
    });
  });
};