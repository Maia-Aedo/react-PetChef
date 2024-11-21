import api from './api.js';

export const login = async (credentials) => {
  return await api.post('/users/login', credentials);
};

export const register = async (userData) => {
  return await api.post('/users/register-usuario', userData);
};


