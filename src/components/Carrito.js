import React from 'react';
import { useCart } from '../components/CartContext.js';

const Carrito = () => {
  const { cart, totalPrice } = useCart(); // Usa el contexto para acceder al carrito y el precio total

  return (
    <div className="product-grid-cart">
      <h1>Carrito</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((product, index) => (
            <div className="product-card-22" key={`${product.id}-${product.product_code}-${index}`}>
              <img src={product.image_url} alt={product.product_name} />
              <div className="card-body">
                <p className="shop-card-title-1">{product.product_name}</p>
                <p className="shop-card-description-1">Cantidad: {product.quantity}</p>
                <p className="shop-card-price-1">Precio: ${product.price.toFixed(2)}</p>
                <p className="shop-card-price-1">Total: ${(product.price * product.quantity).toFixed(2)}</p>
                <p className="shop-card-description-1">Categoría: {product.category}</p>
              </div>
            </div>
          ))}
          <h2>Total a pagar: ${totalPrice.toFixed(2)}</h2>
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default Carrito;
