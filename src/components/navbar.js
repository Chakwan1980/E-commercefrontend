// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">MiLogo</div>
      <div className="nav-links">

        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/aboutus">Aboutus</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
