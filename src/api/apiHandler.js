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
 * GET REQUEST
 */
export const getAxios = (endpoint) => {
  return axios.get(`${API_URL}${endpoint}`, { headers: authHeader() });
}

/**
 * POST REQUEST
 */
export const postAxios = (endpoint, data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}${endpoint}`, data, { headers: authHeader() })
    .then(res => {
      console.log(res);
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

/**
 * PUT REQUEST
 */
export const putAxios = (endpoint, data, id) => {
  return axios.put(`${API_URL}${endpoint}/${id}`, data, { headers: authHeader() });
}


/**
 * DELETE REQUEST
 */
export const deleteAxios = (endpoint, id) => {
  return axios.delete(`${API_URL}${endpoint}/${id}`, { headers: authHeader() });
}

export default authHeader;