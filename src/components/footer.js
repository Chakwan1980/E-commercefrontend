import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity.js"; // Asegúrate de que este componente exista
import AddToCartButton from "./AddToCartButton.js"; // Asegúrate de que este componente exista

const Testcad= ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  

    const handleStarClick = (star) => {
        // Lógica para manejar la calificación, si es necesaria
        console.log(`Estrella clickeada: ${star}`);
    };

    return (
        <div className="card">
            <img src={product.image_url} alt={product.product_name} className="product-image" />
            <div className="card-body">
                <h5 className="shop-card-title-1">{product.product_name}</h5>
                <p className="shop-card-description-1">{product.product_description}</p>
                <p className="shop-card-description-1">Código TEST: {product.product_code}</p>
                <p className="shop-card-description-1">Precio: ${product.price}</p>
                <p className="shop-card-price-1">Categoría: {product.category}</p>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={star <= product.rating ? "star filled" : "star"}
                            onClick={() => handleStarClick(star)} // Ahora está definida
                        >
                            ★
                        </span>
                    ))}
                </div>
                <ProductQuantity quantity={quantity} setQuantity={setQuantity} price={product.price} />
                <AddToCartButton itemId={product.id} quantity={quantity} /> {/* Añade el manejador al botón */}
            </div>
        </div>
    );
};

export default Testcad;