// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../fotos/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="logo" width={150} />
    </div>
    <div className="nav-right">
      <Link to="/home">Home</Link>
      <Link to="/busqueda">Busqueda</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/checkout">CarritoPago</Link>
    </div>
  </nav>
  
  );
};

export default Navbar;
