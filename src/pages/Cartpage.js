import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import { getProducts } from "../api/api.js";
import "./cartpage.css";

const CartPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate(); // Inicializa useNavigate
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();

        // Convertimos itemId a cadena para que coincida con la estructura de datos
        const foundItem = products.find(
          (product) => String(product.id) === String(itemId)
        );

        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        console.error("Error al cargar el producto:", err);
        setError("No se pudo cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  const handleBuy = () => {
    // Redirige a la página de compra
    navigate(`/comprar/${itemId}`); // Usa navigate en lugar de history.push
  };

  const handleDelete = () => {
   
    alert("Producto eliminado."); // Mensaje de confirmación, reemplaza con lógica real
    navigate(`/home`);

  };

  if (loading) return <div>Cargando producto...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-cartepage">
      <h1>Detalle del Producto</h1>
      {item ? (
        <div className="card" style={{ width: "60rem" }}>
          <img
            src={item.image_url || "https://via.placeholder.com/150"}
            className="card-img-top"
            alt={item.product_name}
          />
          <div width={200}>
            <h5 className="card-title">{item.product_name}</h5>
            <p className="card-text">{item.product_description}</p>
            <p className="card-text">Precio: ${item.price}</p>
          </div>
          <div className="button-container">
            <button className="btn btn-primary mt-3" onClick={handleBuy}>
              Comfirmar Pago
            </button>
            <button className="btn btn-primary mt-3" onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default CartPage;
