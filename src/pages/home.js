// src/pages/Payment.js
import React from 'react';
import ProductList from '../components/ProductList.js';
import FotoTest  from '../fotos/test.png'
import './home.css'

const Home = ({ addToCart }) => {
  return (
    <>
    <h2 className="home-title">Bienvenido </h2> 
    <div className="card-img"><img  className='foto-test' src={FotoTest} alt="foto"/></div>
    <div className="home-container"> {/* Aplica la clase de contenedor */}
    <div className="product-list"> {/* Aplica la clase para la lista de productos */}
      <ProductList addToCart={addToCart} />
    </div>
  </div>
  </>
  );
};

export default Home;