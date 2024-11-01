// Sidebar.js
import React from "react";
import { useCart } from "../components/CartContext.js"; // Asegúrate de importar el contexto
import ProductQuantity from "../components/ProductQuantity.js"; // Importa el componente para manejar la cantidad de productos
import "./Sidebar.css"; // Asegúrate de tener estilos para el sidebar

const Sidebar = ({ onClose }) => {
  const { cart, calculateTotal } = useCart(); // Accede al carrito y al método de calcular total

  // Calcula el total del carrito
  const total = calculateTotal();

  return (
    <>
      <div className="sidebar">
        <button className="close-btn" onClick={onClose}>
          Cerrar
        </button>
        <h2>Carrito</h2>
        {cart.length > 0 ? (
          cart.map((product, index) => {
            const price = parseFloat(product.price); // Convertir a número

            return (
              <div
                className="product-card-22-sidebar"
                key={`${product.id}-${product.product_code}-${index}`}
              >
                <img src={product.image_url} alt={product.product_name} />
                <div className="card-body-22-sidebar">
                  <div className="product-grid-button">
                    <ProductQuantity productId={product.id} />{" "}
                    {/* Maneja la cantidad de productos */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No hay productos en el carrito.</p>
        )}

        {/* Mostrar el total del carrito */}
      </div>
      <h2>Total del carrito: ${total > 0 ? total.toFixed(2) : "0.00"}</h2>{" "}
      {/* Asegúrate de que total no sea NaN antes de usar toFixed */}
    </>
  );
};

export default Sidebar;
