import './Payment.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerPayment } from '../../services/paymentService.js';

export const PaymentPage = () => {
    const [formData, setFormData] = useState({});
    const [amount, setAmount] = useState(15.99); // Precio de la suscripcion
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Obtiene datos del form guardados en el localstorage
    useEffect(() => {
        const storedData = localStorage.getItem('subscriptionData');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        } else {
            alert('No hay datos, por favor completa el formulario primero.');
            navigate('/'); // Si no hay datos, redirige a home
        }
    }, [navigate]);

    // Manejo de pago
    const handlePayment = async () => {
        setLoading(true);
        try {
            await registerPayment(formData.id || 1, amount, 'fake-token'); // Registra pago
            alert('Pago realizado con éxito. ¡Gracias por suscribirte!');
            localStorage.removeItem('subscriptionData'); // Limpia datos después del pago
            navigate('/mis-pagos'); // Redirige a pagos
        } catch (err) {
            alert('Hubo un problema al procesar tu pago. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-page">
            <h1>Confirmar Suscripción</h1>
            {formData.name && formData.email ? (
                <>
                    <p className="payment-description">
                        Estás a punto de suscribirte a nuestro servicio mensual por <strong>${amount}</strong>. 
                        Con esta suscripción recibirás correos con consejos para tus mascotas y notificaciones sobre descuentos en tiendas locales.
                    </p>

                    <div className="payment-summary">
                        <h2>Resumen de pago</h2>
                        <ul>
                            <li><strong>Nombre:</strong> {formData.name}</li>
                            <li><strong>Email:</strong> {formData.email}</li>
                            <li><strong>Monto:</strong> ${amount}</li>
                        </ul>
                    </div>

                    <button 
                        className="payment-button" 
                        onClick={handlePayment} 
                        disabled={loading}>
                        {loading ? 'Procesando...' : 'Confirmar y Pagar'}
                    </button>
                </>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};
