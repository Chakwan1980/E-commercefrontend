import React, { useState, useEffect } from 'react';
import './test.css';
import Search from '../components/Search.js';
import ProductLista from './ProductLista.js'; // Asegúrate de que la ruta sea correcta
import { getProducts } from '../api/api.js'; // Asegúrate de importar tu función para obtener productos

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(); // Obtén los productos
      setProducts(data); // Almacena los productos
    };
    fetchProducts();
  }, []); // Se ejecuta una vez cuando el componente se monta

  return (
    <div className='grid-container'>
      <h1>Bienvenido</h1>
      <Search />
      <ProductLista items={products} addToCart={() => {}} /> {/* Pasa los productos a ProductLista */}
    </div>
  );
}

export default Test;



