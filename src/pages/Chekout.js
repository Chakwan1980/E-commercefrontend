// Checkout.js
import React from 'react';
import { useCart } from '../components/CartContext.js';
import './home.css'; // Asegúrate de importar el CSS
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const { cart } = useCart(); // Obtén los elementos del carrito
    const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0); // Calcula el total
    const navigate = useNavigate(); // Hook para acceder a la navegación

    // Función para manejar la redirección al pago
    const handleContinueToPayment = () => {
        // Puedes guardar el totalAmount en un estado global o en localStorage si es necesario
        // localStorage.setItem('totalAmount', totalAmount);
        navigate('/payment'); // Redirige a la página de pago
    };

    return (
        <div className='container'> 
            <div className='product-grid'>
                <h2>Resumen de Compra</h2>
                <h3 className="total">Total a Pagar: ${totalAmount.toFixed(2)}</h3>
                <h4>Productos en el Carrito:</h4>
                <ul>
                    {cart.map(item => (
                        <li key={item.product_code}>
                            <img 
                                src={item.image_url || "https://via.placeholder.com/150"} 
                                className="card-img-top" 
                                alt={item.product_name} 
                            />
                            {item.product_name} - {item.quantity} x ${parseFloat(item.price).toFixed(2)} = ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${totalAmount.toFixed(2)}</h3>
                <button onClick={handleContinueToPayment} className="continue-button">Continuar al Pago</button>
            </div>
        </div>
    );
};

export default Checkout;