// src/pages/Payment.js
import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList.js";
import "./home.css";
import { getProducts } from "../api/api.js";
import Search from "../components/Search.js";

// Componente Main
const Main = () => {
  return (
    <div className="home-grid">
      <div className="home-title">
        <h2 className="title">Bienvenido</h2>
      </div>
      <div className="home-title">
       
          <h2 className="title">
            Historia de la Familia Arte y Tradición: Ayana Bordando Sueños en La
            Esperanza
          </h2>
          <p>
            En la parroquia La Esperanza, en la ciudad de Ibarra, hay una
            familia que ha tejido su historia en cada puntada. Durante más de
            60 años, las generaciones de la familia Flores han mantenido
            viva la tradición del bordado, transformando hilos en arte y
            sueños. Desde los días de su abuela, quien aprendió el oficio de
            su madre, cada bordado ha sido una celebración de la cultura
            local, con diseños que reflejan la belleza de su entorno. Las
            flores de los Andes, los paisajes de la región y las historias de
            la comunidad cobran vida en sus obras, creando piezas únicas que
            cuentan la historia de su gente. Hoy, la familia Flores ha
            decidido compartir su legado con el mundo a través de un
            nuestra tienda o-line. Cada producto no solo es una prenda o un
            accesorio, sino un pedazo de historia, un símbolo de amor y
            dedicación. Al elegir sus creaciones, los clientes no solo
            adquieren arte, sino que se convierten en parte de una tradición
            que sigue floreciendo. Visita nuestra tienda y lleva contigo una
            parte de La Esperanza, donde cada bordado cuenta una historia.
          </p>
      
      </div>
    </div>
  );
};

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
      <div>
      <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>
 
     </div>
    
    </div>
  );

};

export default Home;
