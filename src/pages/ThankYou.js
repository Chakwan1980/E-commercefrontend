import React from 'react';
import './payment.css'; 
const Success = () => {
    return (
        <div className="thank-you-container">
            <div className="thank-you-icon">🎉</div>
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu pedido ha sido procesado exitosamente. Te enviamos un correo de confirmación a tu dirección de correo electrónico.</p>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
            <button className="go-home-button" onClick={() => window.location.href = '/'}>
                Volver a la Página Principal
            </button>
        </div>
    );
};

export default Success;
