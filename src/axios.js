import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';


export default instance