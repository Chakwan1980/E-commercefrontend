// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart } = useCart(); // Obtiene los productos del carrito

    if (cart.length === 0) {
        return <div>El carrito está vacío.</div>; // Mensaje si el carrito está vacío
    }

    return (
        <div>
            <h2>Tu Carrito</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.product_name} - Cantidad: {item.quantity} - Total: ${(item.quantity * item.price).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
