import React, { useState } from 'react';
import './card.css';
import AddToCartButton from '../components/AddButton.js';
import ProductQuantity from './ProductQuantity.js';

const ProductCard = ({ product = {}, onDelete, onEdit }) => {
    const [rating, setRating] = useState(3);

    const handleDelete = () => {
        if (onDelete && product.product_code) {
            onDelete(product.product_code);
        }
    };

    const handleEdit = () => {
        if (onEdit) {
            onEdit(product);
        }
    };

    const handleStarClick = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="product-card">
                    {product.image_url ? (
                        <img src={product.image_url} alt={product.product_name} />
                    ) : (
                        <p>Imagen no disponible</p>
                    )}
                    <h2>{product.product_name || "Producto sin nombre"}</h2>
                    <p>{product.product_description || "Sin descripción disponible"}</p>
                    <p>Precio: ${product.price ? parseFloat(product.price).toFixed(2) : "N/A"}</p>
                    <p>Categoría: {product.category || "Sin categoría"}</p>
                    
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= rating ? "star filled" : "star"}
                                onClick={() => handleStarClick(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <ProductQuantity/>
                    <AddToCartButton itemId={product.id} />{" "}
                {/* Botón para agregar al carrito */}
              </div>
                
            </div>
        </div>
        
    );
};

export default ProductCard;
