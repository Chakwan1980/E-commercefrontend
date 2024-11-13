// src/pages/Busqueda.js
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../components/SearchContext.js';

const Busqueda = () => {
  const { searchTerm } = useContext(SearchContext); // Obtén el término de búsqueda desde el contexto
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`https://tuapi.com/products?category=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error("Error en la solicitud a la API");
        }
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError("Error al cargar los resultados");
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Resultados de búsqueda para: {searchTerm}</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((product) => (
            <li key={product.id}>
              <h2>{product.product_name}</h2>
              <p>{product.product_description}</p>
              <p>Precio: ${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos para "{searchTerm}"</p>
      )}
    </div>
  );
};

export default Busqueda;
