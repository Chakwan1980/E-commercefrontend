// Cart.js
import React from 'react';
import { useCart } from '../components/CartContext.js';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Cart = () => {
    const { cart, updateProductQuantity } = useCart();
    const navigate = useNavigate(); // Inicializa useNavigate

    const totalAmount = cart.reduce((acc, item) => {
        const price = parseFloat(item.price);
        return acc + (price * item.quantity);
    }, 0).toFixed(2);

    const handleIncrease = (product_code) => {
        updateProductQuantity(product_code, 1); // Aumenta la cantidad en 1
    };

    const handleDecrease = (product_code) => {
        updateProductQuantity(product_code, -1); // Disminuye la cantidad en 1
    };

    const handleCheckout = () => {
        // Almacena el total (puedes usar localStorage o un contexto, aquí se usará localStorage)
        localStorage.setItem('totalAmount', totalAmount);
        // Redirige a la página de checkout
        navigate('/checkout');
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <div className="product-card-Card-Test">
                <ul>
                    {cart.map(item => {
                        const price = parseFloat(item.price);
                        return (
                            <li key={item.product_code}>
                                <img 
                                    src={item.image_url || "https://via.placeholder.com/150"} 
                                    className="card-img-top" 
                                    alt={item.product_name} 
                                />
                                <p>{item.product_category}</p>
                                <p>{item.product_description}</p>
                                <p>
                                    {item.product_name} - 
                                    <button onClick={() => handleDecrease(item.product_code)} disabled={item.quantity <= 1}>-</button>
                                    {item.quantity}
                                    <button onClick={() => handleIncrease(item.product_code)}>+</button>
                                    x ${price.toFixed(2)} = ${(price * item.quantity).toFixed(2)}
                                </p>
                            </li>
                        );
                    })}
                </ul>
                <h3>Total: ${totalAmount}</h3>
                <button onClick={handleCheckout}>Pagar</button> {/* Botón para ir al checkout */}
            </div>
        </div>
    );
};

export default Cart;
