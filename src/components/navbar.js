import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../fotos/NuevoLogo.png";
import Cart from "../fotos/icono.gif";
import Envio from "../fotos/envio.gif";
import { useCart } from '../components/CartContext.js';



const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.quantity * item.price, 0); // Calcula el total del dinero



  return (
    <nav className="navbar">

      <div className="#default">
        <img className="logo" src={logo} alt="logo" width={150} />
      </div>

      <div>
        <h6>
          <img
            width={30}
            src={Envio}
            style={{ marginRight: "8px", verticalAlign: "middle" }}
            alt="Envío"
          />
          Compras superiores a $200, envío gratis
        </h6>
      </div>
      <div>

      <div className="navbar-right">
        <Link className="active" to="/home">
          Inicio
        </Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/nuestrahistoria">Nuestra Historia</Link>
      
        <Link to="/blog">Blog</Link>
     



        <Link to="/cart">
          <img src={Cart} alt="Cart" className="cart-logo" width={30} />
          <span  >{totalItems} items</span> {/* Muestra la cantidad total de productos */}
        <span style={{ color: "red" }}>${totalAmount.toFixed(2)}</span> {/* Muestra el total en dinero */}
      </Link>
        
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
