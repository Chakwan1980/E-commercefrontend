import React from "react";
import { useLocation } from "react-router-dom";
 // Asegúrate de que tienes el CSS para estilos

const CheckoutPage = () => {
  const location = useLocation();
  const cartItems = location.state?.cart || [];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Resumen de Compra</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <div className="product-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="product-card-1">
                <img
                  src={item.image_url || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={item.product_name || "Imagen del producto"}
                  style={{ width: "150px", height: "auto" }} // Ajusta el tamaño según lo que necesites
                />
                <div className="card-body">
                  <h5 className="shop-card-title-1">{item.product_name}</h5>
                  <p className="shop-card-description-1">{item.product_description}</p>
                  <p className="shop-card-description-1">{item.product_code}</p>
                  <p className="shop-card-description-1">Precio: ${item.price}</p>
                  <p className="shop-card-price-1">Cantidad: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <h3>Total a pagar: ${totalPrice.toFixed(2)}</h3>
          <button>Confirmar y Pagar</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;





