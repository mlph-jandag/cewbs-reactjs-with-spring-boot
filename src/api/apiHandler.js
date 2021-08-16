import axios from '../axios';
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
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
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