import React from "react";
import "./HistorySection.css"; // Asegúrate de tener los estilos correspondientes
import Gallery from "../components/Galery.js";

const HistorySection = () => {
  return (
    <div className="history-section">
      <h2 className="section-title">
        Llegamos a donde tú quieras, sorprende a tus seres queridos.
      </h2>

      <div className="grid-container">
        <div className="story-container">
          <h3>
            ¿Quieres sorprender a un familiar con un regalo personalizado?
          </h3>
          <br />
          Ahora te podemos ayudar, envíanos tus ideas y nosotros las haremos
          realidad.
          <p>
            Ofrecemos la posibilidad de personalizar una amplia gama de
            productos con bordados únicos, adaptados a las preferencias de
            nuestros clientes. Desde gorras y camisetas hasta chompas, vestidos,
            zapatos y bolsos, estamos comprometidos en brindar una experiencia
            de personalización excepcional. Los clientes pueden elegir los
            colores que deseen, garantizando que cada artículo refleje su estilo
            y personalidad. Nuestro equipo de expertos en bordado utiliza
            técnicas de alta calidad para asegurar que cada detalle sea
            perfecto, haciendo de cada producto una pieza verdaderamente única.
            Descubre cómo podemos transformar tus ideas en realidad con nuestros
            bordados personalizados.
          </p>
        </div>

        <div className="info-container">
          <h3> Galería de Imagenes</h3>
          <Gallery />
        </div>

        <div className="info-container">
          <h3>Contáctanos</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">Nombre:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellido:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <button type="submit">Enviar</button>
          </form>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
