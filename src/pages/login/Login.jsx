import React, { useState } from 'react';
import { login } from '../../services/authService.js';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  // iniciamos estado para las credenciales (inician vacias) - setCredentials actualizan los valores
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  // hook para redirigir
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      localStorage.setItem('authToken', response.data.token);
      alert('Inicio de sesión exitoso');
      navigate('/recetas')
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <form onSubmit={handleSubmit} class="login-form">
          <div className="field">
            <input
              type="text" id="email"
              placeholder="Ingrese su email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
          </div>
          <div className="field">
            <input
              type="password" id="password"
              placeholder="Ingrese su contraseña"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

