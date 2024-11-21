import './PaymentsList.css';
import React, { useEffect, useState } from 'react';
import { getPayments } from '../../services/paymentService.js';

export const PaymentsList = () => {
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPayments = async () => {
            const token = localStorage.getItem('authToken'); // Recuperar token del localStorage
            if (!token) {
                setError('No se encontró un token válido. Por favor, inicia sesión.');
                return;
            }

            try {
                const userPayments = await getPayments(token);
                setPayments(userPayments);
            } catch (err) {
                setError('Error al obtener los pagos.');
            }
        };

        fetchPayments();
    }, []);

    return (
        <div className="payments-list">
            <h1>Mis Pagos</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {payments.length > 0 ? (
                    payments.map((payment) => (
                        <li key={payment.id} className="payment-item">
                            <p><strong>Monto:</strong> ${payment.monto}</p>
                            <p><strong>Fecha:</strong> {new Date(payment.created_at).toLocaleDateString()}</p>
                        </li>
                    ))
                ) : (
                    <p>No tienes pagos registrados.</p>
                )}
            </ul>
        </div>
    );
};
