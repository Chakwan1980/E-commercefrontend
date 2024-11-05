/** Carrito Shoping  */

import React, { useContext } from "react";
import { CartContext } from "../components/CartContext.js";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h5>{item.product.product_name}</h5>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.product.price}</p>
              <p>Total: ${(item.quantity * item.product.price).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
