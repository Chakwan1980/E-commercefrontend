import React, { createContext, useContext, useState } from "react";

// Crea el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + quantity } // Sumar la cantidad
            : item
        );
        console.log("Carrito actualizado:", updatedItems); // Muestra el carrito actualizado
        return updatedItems;
      }

      // Si no existe, agrega el producto al carrito
      const newItems = [...prevItems, { ...product, quantity }];
      console.log("Producto agregado al carrito:", newItems); // Muestra el nuevo producto agregado
      return newItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
