// src/components/SearchItems.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductsByCategory } from '../api/api.js';

const SearchItems = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsData = await getProductsByCategory(query);
        setProducts(productsData);
      } catch (err) {
        setError("Error al obtener los productos");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Resultados para: {query}</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.product_name}</h2>
              <p>{product.product_description}</p>
              <p>
                Precio: $
                {isNaN(parseFloat(product.price))
                  ? "0.00"
                  : parseFloat(product.price).toFixed(2)}
              </p>
              {product.image_url && (
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  width="100"
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos para la categoría "{query}"</p>
      )}
    </div>
  );
};

export default SearchItems;
