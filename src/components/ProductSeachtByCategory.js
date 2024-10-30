import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../api/api.js"; // Asegúrate de la ruta correcta
import ProductCard from "./ProductCard.js";
import "./productlistcategoria.css";
import ProductList from "./ProductList.js";

const ProductSearchByCategory = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!category) {
      setError("Por favor, ingresa una categoría.");
      return;
    }
    setError(null); // Resetea el error
    try {
      const fetchedProducts = await getProductsByCategory(category.trim()); // Asegúrate de que la categoría esté bien recortada
      setProducts(fetchedProducts); // Establece los productos obtenidos
    } catch (err) {
      setError("Error al buscar productos por categoría."); // Manejo de errores
      console.error(err); // Muestra el error en la consola
    }
  };

  useEffect(() => {
    // Limpiar la lista de productos cuando cambie la categoría
    setProducts([]);
  }, [category]);

  return (
<div className="container-search">
  <h2>Buscar Productos por Categoría</h2>
  <label htmlFor="category-input">Categoría:</label>
  <input
    id="category-input"
    className="category-input"  // Añadido para aplicar estilos específicos
    type="text"
    value={category}
    onChange={(e) => setCategory(e.target.value)} // Actualiza el estado de la categoría
    placeholder="Ingresa la categoría"
  />
  <button onClick={handleSearch}>Buscar</button>
  {error && <p style={{ color: "red" }}>{error}</p>}{" "}
  {/* Muestra el error si existe */}
  {products.length > 0 ? (
    <div >
      {products.map((product) => (
        <ProductList
          key={product.product_code} // Asegúrate de que este código sea único
          product={product}
          onDelete={(productCode) => {
            /* lógica de eliminación */
          }}
          onEdit={(product) => {
            /* lógica de edición */
          }}
        />
      ))}
    </div>
  ) : (
    <p>No se encontraron productos.</p> // Mensaje si no hay productos
  )}
</div>

  );
};

export default ProductSearchByCategory;
