import React from 'react';
import { useCart } from './CartContext.js'; // Asegúrate de que la importación sea correcta

const ProductCard = ({ product }) => {
  const { addProductToCart } = useCart(); // Usamos el nombre correcto aquí

  // Manejador de clic para agregar el producto al carrito
  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity: 1 }); // Asegúrate de pasar la cantidad
    alert(`Agregaste ${product.product_name} al carrito.`);
  };

  // Verificación del precio
  const price = parseFloat(product.price);
  if (isNaN(price)) {
    return <div>Error: El precio del producto no es válido.</div>; // Mensaje de error
  }

  return (
    <div className="product-card">
      <img 
        src={product.image_url || "https://via.placeholder.com/150"} 
        className="card-img-top" 
        alt={product.product_name} 
      />
      <h2>{product.product_name}</h2>
      <p>Precio: ${price.toFixed(2)}</p>
      <p>Descripción: {product.product_description || "Sin descripción disponible."}</p> {/* Descripción del producto */}
      <p>Categoría: {product.product_category || "Sin categoría."}</p> {/* Categoría del producto */}
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
