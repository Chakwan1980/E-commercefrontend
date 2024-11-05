import React from 'react';
import { useCart } from '../components/CartContext.js';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../components/productcard.css';
import  Eliminar from '../fotos/eliminar.png'

const Cart = () => {
    const { cart, updateProductQuantity, removeProductFromCart } = useCart();
    const navigate = useNavigate(); // Inicializa useNavigate

    const totalAmount = cart.reduce((acc, item) => {
        const price = parseFloat(item.price);
        return acc + (price * item.quantity);
    }, 0).toFixed(2);

    const handleIncrease = (product_code) => {
        updateProductQuantity(product_code, 1); // Aumenta la cantidad en 1
    };
    
    const handleDecrease = (product_code) => {
        const item = cart.find(item => item.product_code === product_code);
        if (item && item.quantity > 1) {
            updateProductQuantity(product_code, -1); // Disminuye la cantidad en 1
        } else if (item && item.quantity === 1) {
            removeProductFromCart(product_code); // Elimina el producto si la cantidad es 1
        }
    };

    const handleRemove = (product_code) => {
        removeProductFromCart(product_code); // Llama a la función de eliminar
    };
    
    const handleCheckout = () => {
        localStorage.setItem('totalAmount', totalAmount);
        navigate('/checkout'); // Redirige a la página de checkout
    };

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className='container-CART'>
            <h2>Carrito de Compras</h2>
            <div className="product-grid-CART">
                <ul className="product-card-CART">
                    {cart.map(item => {
                        const price = parseFloat(item.price);
                        return (
                            <li key={item.product_code} className="product-item">
                                <img 
                                    src={item.image_url || "https://via.placeholder.com/150"} 
                                    className="card-img-top-1" 
                                    alt={item.product_name} 
                                />
                                <p>{item.product_category}</p>
                                <p>{item.product_description}</p>
                                <div className="product-info">
                                    <p>
                                        {item.product_name} 
                                        <button className='menos-mas' onClick={() => handleDecrease(item.product_code)} disabled={item.quantity <= 1}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className='menos-mas'   onClick={() => handleIncrease(item.product_code)}>+</button>
                                        x ${price.toFixed(2)} = ${(price * item.quantity).toFixed(2)}
                                    </p>
                                    <button className="remove-button" onClick={() => handleRemove(item.product_code)}> <img src={Eliminar} width={20}/> </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <h3>Total: ${totalAmount}</h3>
                <button onClick={handleCheckout} className="pay-button">Pagar</button>
                <button onClick={handleGoBack} className="pay-button">Regresar</button>
            </div>
        </div>
    );
};

export default Cart;
