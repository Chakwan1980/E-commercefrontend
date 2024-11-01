// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../fotos/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="#default">
      <img className ="logo" src={logo} alt="logo" width={150} />
    </div>
    <div className="navbar-right">
      <Link className='active' to="/home">Home</Link>
      <Link to="/busqueda">Busqueda</Link>
     
      <Link to="/aboutus">About Us</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/test">Test</Link>
   
    </div>
  </nav>
  
  );
};

export default Navbar;
