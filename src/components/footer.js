// Footer.js
import React from 'react';
import './footer.css';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
      <ul className="footer-links">
        <li><a href="/aboutus">Sobre Nosotros</a></li>
        <li><a href="/home">Servicios</a></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com/ayana.bordandosuenos" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> 
        </a>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
