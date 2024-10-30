import React, { useState } from "react";
import "./card.css";
import AddToCartButton from "../components/AddButton.js";
import ProductQuantity from "./ProductQuantity.js";

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
    <div className="product-grid">
      <div className="product-card-1">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.product_name}
            className="card-img-top"
          />
        ) : (
          <p>Imagen no disponible</p>
        )}
        <div className="card-body">
          <h5 className="shop-card-title-1">{product.product_name}</h5>
          <p className="shop-card-description-1">
            {product.product_description}
          </p>
          <p className="shop-card-description-1">{product.product_code}</p>
          <p className="shop-card-description-1">Precio: ${product.price}</p>
          <p className="shop-card-price-1">Categoría: {product.category}</p>
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
          <AddToCartButton itemId={product.id} />{" "}
          {/* Botón para agregar al carrito */}
          <div className="product-actions">
            <ProductQuantity />
            <AddToCartButton itemId={product.id} />{" "}
            {/* Botón para agregar al carrito */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
