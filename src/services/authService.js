import api from './api.js';

// Accedemos a métodos de autenticacion de la api
export const login = async (credentials) => {
  return await api.post('/users/login', credentials);
};

export const register = async (userData) => {
  return await api.post('/users/register-usuario', userData);
};


