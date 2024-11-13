import React from "react";
import { useCart } from "./CartContext.js"; 
import "./productcard.css";

const ProductCard = ({ product }) => {
  console.log(product);
  const { addProductToCart } = useCart(); 


  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity: 1 }); 
    alert(`Agregaste ${product.product_name} por $${product.price} al carrito.`);
  };


  const price = parseFloat(product.price);
  if (isNaN(price)) {
    return <div>Error: El precio del producto no es válido.</div>; 
  }

  return (
    <div className="ProductCard">
    <div className="container-CART ">
         <h2 className='product-title'>{product.product_name}</h2>
      <img   className="zoom-image"
        src={product.image_url || "https://via.placeholder.com/150"}
       
        alt={product.product_name}
      />
      
      <p>Precio: ${price.toFixed(2)}</p>
     
      <p>
       
        {product.product_description || "Sin descripción disponible."}
      </p>
      <p>Código del producto: {product.product_code}</p>
      <p>Categoría: {product.category || "Sin categoría."}</p>
      <button onClick={handleAddToCart}>Agregar al carrito para pagar</button>
    </div>
    </div>
  );
};

export default ProductCard;
