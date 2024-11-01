import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductComponent = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento al contenedor
    
    // Verifica si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si no está, agrégalo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Actualiza el total
    setTotalAmount(prevTotal => prevTotal + product.price); // Asumiendo que `product.price` es el precio del producto

    alert(`Producto agregado al carrito: ${product.product_name}`);
    console.log('Producto agregado al carrito:', product);
    navigate('/cart'); // Navega a la página del carrito
  };

  return (
    <button onClick={handleAddToCart}>
      Agregar al carrito
    </button>
  );
};

export default ProductComponent;
