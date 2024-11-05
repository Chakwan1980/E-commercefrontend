/* Resumen del Shop  */


import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../components/CartContext.js";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const {  removeProductFromCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = parseFloat(location.state?.totalPrice || 0); // Asegúrate de que sea un número
  const product = location.state?.product; // Desestructuramos los datos de location.state

  console.log("Datos en Shop:", location.state); // Agrega este log para depurar

  const handleRemove = () => {
    removeProductFromCart(product.id);

    navigate("/home");
    alert(`Producto elimando , regresa pronto!`);
    console.log(`Producto eliminado del carrito: ${product.product_name}`);
  };
  return (
    <div>
      <h1 className="product-grid-cart">Mis compras</h1>
      {product ? (
        <div className="product-card-22">
          <img src={product.image_url} alt={product.product_name} />
          <div lassName="card-body">
            <h5 className="shop-card-title-1">{product.product_name}</h5>
            <p className="shop-card-description-1">
              {product.product_description}
            </p>
            <p className="shop-card-description-1">{product.product_code}</p>
            <p className="shop-card-description-1">
              Precio por unidad: ${parseFloat(product.price).toFixed(2)}
            </p>
            <p className="shop-card-price-1">Categoría: {product.category}</p>
            <p className="shop-card-price-1">
              Total a pagar: ${totalPrice.toFixed(2)}
            </p>
            <button className="add-to-cart">PAGAR</button>
            <button
              className="remove-from-cart"
              onClick={() => handleRemove(product.id)} // Llama a handleRemove con el ID del producto
            >
              {" "}
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <p>No hay productos para mostrar</p> // Muestra un mensaje si no hay datos de producto
      )}
    </div>
  );
};

export default Shop;
