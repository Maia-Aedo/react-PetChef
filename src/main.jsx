import App from './App.jsx'
// IMPORTACION DE ESTILOS
import './index.css';
// IMPORTACION DE COMPONENTES
import React from 'react';
import ReactDOM from 'react-dom/client'
// entre llaves por ser fn const
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
