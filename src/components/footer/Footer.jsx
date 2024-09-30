import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
          <div className="contain">
            <div className="footer-col">
              <h1>Atajos</h1>
              <ul className="footer-ul">
                <li className="footer-li"><Link to='/'>Inicio</Link></li>
                <li className="footer-li"><Link to='/contacto'>Contacto</Link></li>
                <li className="footer-li"><Link to='/preguntas'>Preguntas frecuentes</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h1>¿Por qué PetChef?</h1>
              <ul className="footer-ul">
                <p>Porque sabemos lo mucho que amas a tu amigo peludo, te ofrecemos
                  recetas nutritivas con alimentos frescos para contribuir con su bienestar general.
                </p>
              </ul>
            </div>
          </div>
      </footer>
    </>
  );
};



