import api from './api.js';;

// Registrar un pago
export const registerPayment = async (usuarioId, monto) => {
    try {
        const response = await api.post('/pagos/registrar', { usuarioId, monto });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.msg || 'Error al registrar el pago');
    }
};

// Obtener pagos de un usuario
export const getPayments = async (token) => {
    try {
        const response = await api.get('/pagos/usuario', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.payments;
    } catch (error) {
        throw new Error(error.response?.data?.msg || 'Error al obtener los pagos');
    }
};