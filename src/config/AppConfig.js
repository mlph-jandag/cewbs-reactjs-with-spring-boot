
const STORAGE_NAME = process.env.STORAGE_NAME || 'cewbs';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const USER_ROLES = ['ADMIN', 'EDITOR', 'USER'];

export {
  STORAGE_NAME,
  API_URL,
  USER_ROLES
}