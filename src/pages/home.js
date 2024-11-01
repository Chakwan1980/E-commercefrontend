// src/pages/Payment.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList.js';
import FotoTest from '../fotos/test.png';
import './home.css';

import { getProducts } from '../api/api.js';
import Search from '../components/Search.js';


// Componente Main
const Main = () => {
  return (
    <div className="home-grid">
      <div className="home-title">
        <h2>Bienvenido</h2>
        <img className="foto-test" src={FotoTest} alt="foto" />
      </div>
    </div>
  );
};

// Componente principal Home
const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data); // Asegúrate de que data no sea undefined
    };
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleClear = () => {
    setFilteredProducts(products); // Restablece los productos filtrados
  };

  return (
    <div className='product-grid'>
      <div className= 'product-grid ' >
      <Main />
      <Search className="" onSearch={handleSearch} onClear={handleClear} /> {/* Pasa la función onClear */}
      <ProductList products={filteredProducts} addToCart={addToCart} />
 
     </div>
    
    </div>
  );

};

export default Home;
