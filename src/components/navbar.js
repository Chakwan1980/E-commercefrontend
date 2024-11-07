
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../fotos/logoflores.png";
import Cart from "../fotos/icono.gif";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="#default">
        <img className="logo" src={logo} alt="logo" width={150} />
      </div>
      <div className="navbar-right">
        <Link className="active" to="/home">
          Home
        </Link>

        <Link to="/aboutus">About Us</Link>

        <Link to="/cart">
          <img src={Cart} alt="Cart" className="cart-logo" width={30} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
