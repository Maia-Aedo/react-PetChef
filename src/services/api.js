import axios from 'axios';

// Creamos instancia de api usando la url base
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
