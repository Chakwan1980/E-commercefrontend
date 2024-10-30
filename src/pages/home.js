// src/pages/Payment.js
import React from 'react';
import ProductList from '../components/ProductList.js';
import FotoTest  from '../fotos/test.png'
import './home.css'
import ProductSearchByCategory from '../components/ProductSeachtByCategory.js';




// Componente Main
const Main = ({ addToCart }) => {
  return (
    < div className="main">
      <div className="home-title">
      <h2 >Bienvenido</h2>
      <img className="foto-test" src={FotoTest} alt="foto" />
      </div>
      <div className="product-list">
        <ProductSearchByCategory />
      </div>
      
      <div className="product-list">
        <ProductList addToCart={addToCart} />
      </div>
      
    </div>
  );
};



// Componente Footer
const Footer = () => {
  return (
    <div className="footer">
      <p>Contenido del pie de página aquí</p>
    </div>
  );
};

// Componente principal Home
const Home = ({ addToCart }) => {
  return (
    <div className="grid-container">
      <div className="grid-item menu">
        
      </div>
      <div className="grid-item main">
        <Main addToCart={addToCart} />
      </div>
     
      <div className="grid-item footer">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
// Exportar el componente