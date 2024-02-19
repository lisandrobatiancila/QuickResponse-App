import axios from 'axios';
import {PORT, BASE_URL} from '@env';

const httpInstance = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
});

export default httpInstance;
