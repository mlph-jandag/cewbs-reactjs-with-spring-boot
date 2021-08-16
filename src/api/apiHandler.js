import axios from 'axios';
import { API_URL,STORAGE_NAME } from '../config/AppConfig';

/**
 * Return authorization header
 */
export const authHeader = () => {
  const { token } = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (token) {
    return {
      Authorization: 'Bearer ' + token,
    };
  }
  return {};
}

/**
 * Method GET
 */
export const getAxios = async (endpoint) => {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}${endpoint}`, { headers: authHeader() })
    .then((response) => {
      console.log(response);
      resolve(response.data);
    })
    .catch(error => {
      console.log(error);
      reject(error)
    });
  });
}

export default authHeader;