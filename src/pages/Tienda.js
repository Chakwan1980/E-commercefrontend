import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.js";
import { getProducts } from "../api/api.js"; // Asegúrate de que la ruta sea correcta
import "../components/productcard.css";

const Tienda = () => {
  const [products, setProducts] = useState([]); // Estado para guardar los productos
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener productos y manejar el error
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Llama a la función que hace la solicitud
        setProducts(data); // Guarda los productos en el estado
      } catch (error) {
        setError("Error obteniendo productos");
      }
    };

    fetchProducts(); // Llama a la función de carga de productos
  }, []); // Ejecuta solo una vez al montar

  if (error) return <div>{error}</div>; // Muestra el error si existe

  return (
    <div >

      <h1 className="main-container"> Nuestro Catalogo </h1>
   <hr></hr>
      <div className="product-container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Cargando productos...</p> // Mensaje mientras se cargan los productos
        )}
      </div>
    </div>
  );
};

export default Tienda;
