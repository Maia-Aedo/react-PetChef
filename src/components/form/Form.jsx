import './Form.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const navigate = useNavigate();

    // Maneja cambios en los inputs
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Maneja envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación
        if (!formData.name || !formData.email) {
            alert('Por favor, completa todos los campos');
            return;
        }

        // Guarda datos en localStorage
        localStorage.setItem('subscriptionData', JSON.stringify(formData));
        // Redirección
        navigate('/pagar-suscripcion', { state: { formData } });
    };

    return (
        <div id="home-form-container">
            <form id="home-form" onSubmit={handleSubmit}>
                <h2 className="home-form-title">¡Suscríbete de manera mensual!</h2>
                <p className="home-form-sub">
                    Recibe un correo con una lista de consejos para tu mascota <br />
                    además de noticias sobre descuentos en las tiendas de la ciudad.
                </p>
                <input
                    type="text"
                    id="name"
                    placeholder="Ingresa tu nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <button className="home-submit" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};
