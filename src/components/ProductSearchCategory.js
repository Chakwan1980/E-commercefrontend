import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../api/api.js"; 
import ProductCard from "./ProductCard.js";
import "./productlistcategoria.css";

const ProductSearchByCategory = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (!category) {
      setError("Por favor, ingresa una categoría.");
      return;
    }
    setError(null); 
    try {
      const fetchedProducts = await getProductsByCategory(category.trim()); 
      setProducts(fetchedProducts); 
    } catch (err) {
      setError("Error al buscar productos por categoría."); 
      console.error(err); 
    }
  };

  useEffect(() => {

    setProducts([]);
  }, [category]);

  return (
    <div className="container-search">
      <h2>Buscar Productos por Categoría</h2>
      <form className="d-flex me-2" onSubmit={handleSearch}>
        <input
          className="form-control me-2 category-input"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Ingresa la categoría"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
   
      {products.length > 0 ? (
        <div className="container-search-2">
          {products.map((product) => (
            <ProductCard
              key={product.product_code} 
              product={product}
              onDelete={(productCode) => {
               
              }}
              onEdit={(product) => {
             
              }}
            />
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p> 
      )}
    </div>
  );
};

export default ProductSearchByCategory;
