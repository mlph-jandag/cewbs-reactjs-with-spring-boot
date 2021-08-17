import axios from "axios";
import authHeader from "./api/apiHandler";
import { API_URL } from "./config/AppConfig";

const instance = axios.create({
  baseURL: API_URL, 
  headers: authHeader()
});
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
instance.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";

export default instance;
