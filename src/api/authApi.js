import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password) =>  {
  console.log("logging in" + API_URL);
  return axios
    .post(`${API_URL}/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      // if (response.data.accessToken) {
      //   localStorage.setItem("user", JSON.stringify(response.data));
      // }

      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};