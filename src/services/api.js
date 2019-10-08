import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export const apiTokenRequest = axios.create({
  baseURL: 'https://github.com/login/oauth/',
});

export default api;
