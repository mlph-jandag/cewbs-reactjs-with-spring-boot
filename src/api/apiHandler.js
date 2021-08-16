import axios from 'axios';
import { API_URL,STORAGE_NAME } from '../config/AppConfig';

/**
 * Get all info
 */
export const authInfo = JSON.parse(localStorage.getItem(STORAGE_NAME)) || {};

/**
 * Return authorization header
 */
export const authHeader = () => {
  const { token } = authInfo;
  if (token) {
    return {
      Authorization: 'Bearer ' + token
    };
  }
  return {};
}

/**
 * Every autoload request
 */
export const axiosAutoload = (endpoint) => {
  const url = `${API_URL}${endpoint}`;
  return axios.get(url, { headers: authHeader() });
}


/**
 * Method GET
 */
export const getAxios = async (endpoint) => {
  const url = `${API_URL}${endpoint}`;
  console.log(url);
  console.log(authHeader());
  return new Promise((resolve, reject) => {
    axios.get(url, { headers: authHeader() })
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