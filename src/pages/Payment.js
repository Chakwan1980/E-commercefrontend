import React, { useState } from 'react';
import { useCart } from '../components/CartContext.js';
import { useNavigate } from 'react-router-dom';
import './payment.css'; // Importa tu archivo CSS


const Payment = () => {
    const { cart } = useCart();
    const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();

    const handlePayment = (e) => {
        e.preventDefault();
        alert('Pago procesado exitosamente!');
        navigate('/thank-you'); // Navega a la página de agradecimiento
    };

    return (
        <div className='container-payment'>
            <h2>Pagar</h2>
            <h3>Total a Pagar: ${totalAmount.toFixed(2)}</h3>
            <form onSubmit={handlePayment}>
            <div>
                    <label htmlFor="cardNumber">Nombre del Titular:</label>
                    <input 
                        type="text" 
                        id="cardNumber" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="cardNumber">Número de Tarjeta:</label>
                    <input 
                        type="text" 
                        id="cardNumber" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="expiryDate">Fecha de Expiración (MM/AA):</label>
                    <input 
                        type="text" 
                        id="expiryDate" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="cvv">CVV:</label>
                    <input 
                        type="text" 
                        id="cvv" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value)} 
                        required 
                    />
                </div>
                <div className="card-icons">
                    <img src="/assets/visa.png" alt="Visa" />
                    <img src="/assets/mastercard.png" alt="MasterCard" />
                    <img src="/assets/amex.png" alt="American Express" />
                </div>
                <button type="submit" className="pay-button">Pagar</button>
            </form>
        </div>
    );
};

export default Payment;