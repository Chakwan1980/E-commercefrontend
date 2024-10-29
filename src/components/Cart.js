import React from 'react';

const Cart = ({ cart, onCheckout }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          <button onClick={onCheckout}>Confirmar Compra</button>
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
