// AddToCartButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddToCartButton = ({ itemId, label = "Añadir al carrito" }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/cart/${itemId}`);
    };

    return (
        <button onClick={handleClick} className="btn btn-primary mt-3">
            Comprar
        </button>
    );
};

export default AddToCartButton;








