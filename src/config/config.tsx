import axios from 'axios';
// require('dotenv').config();

// const BASE_URL = process.env.BASE_URL;
// const PORT = process.env.PORT;

const httpInstance = axios.create({
  baseURL: "http://192.168.176.134:3000",
});

export default httpInstance;
