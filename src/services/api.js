import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3306',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar el token de autenticación
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;
