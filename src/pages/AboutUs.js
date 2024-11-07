import React from "react";
import { useNavigate } from "react-router-dom";
import "./Aboutus.css";
import Gallery from "../components/Galery.js";
import ContactForm from "./ContactForm.js"; 

const AboutUs = () => {
  
const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/home'); 
  };
  return (
    <div className="history-section">
      <h2 className="section-title">
        Llegamos a donde tú quieras, sorprende a tus seres queridos.
      </h2>

      <div className="grid-container">
        <div className="story-container">
          <h3>
            ¿Quieres sorprender a un familiar con un regalo personalizado?
          </h3> <br></br>
          <p>
          🌸 Regalos únicos con un toque artesanal, inspirados en nuestras raíces familiares 🌸

En nuestra empresa familiar, llevamos adelante la tradición de nuestras madres y abuelas artesanas de La Esperanza, quienes han bordado su pasión en cada hilo y cada diseño. Ofrecemos una amplia gama de productos personalizados – desde gorras y camisetas hasta vestidos, bolsos y mucho más – creados a la medida de tus gustos y preferencias.

Nuestros clientes pueden elegir colores y detalles para hacer que cada pieza refleje su estilo y sentimientos. Con técnicas de alta calidad y una atención cuidadosa en cada puntada, convertimos tus ideas en regalos únicos y llenos de significado para sorprender en el Día de la Madre, cumpleaños, el Día del Padre y cualquier ocasión especial.

Descubre la magia de los bordados personalizados y lleva un pedacito de nuestras raíces a tus seres queridos.
          </p>
        </div>

        <div className="info-container">
          <h3>Galería de Imágenes</h3>
          <Gallery />
        </div>

        <div className="info-container">
          <h3>Contáctanos</h3>
          <ContactForm /> 
        </div>

        <div className="links-container">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li>
              <a
                href="https://gplaesperanza.gob.ec/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reportaje sobre La Esperanza
              </a>
            </li>
            <li>
              <a
                href="link_a_reportaje_2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Historia de la Tradición Local
              </a>
            </li>
            <li>
              <a
                href="link_a_turismo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Turismo en La Esperanza
              </a>
            </li>
            <br></br>
            <button onClick={handleRedirect} className="btn btn-primary">
          Ir a la página de inicio
        </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
