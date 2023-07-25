import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACKEND_SERVER_HOST,
  withCredentials: true,
});

export default api;
