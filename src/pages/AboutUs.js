import React from "react";
import { useNavigate } from "react-router-dom";
import "./Aboutus.css";
import Gallery from "../components/Galery.js";
import ContactForm from "./ContactForm.js";
import ModeloBordado from "../fotos/ModeloBordado.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/home");
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
          </h3>{" "}
          <br></br>
          <p>
            Al elegir Ayana, apoyas la solidaridad y el desarrollo de los
            artesanos. Cada compra contribuye directamente a mejorar la calidad
            de vida de nuestros artesanos, promoviendo el trabajo justo y
            sostenible, y permitiéndoles continuar con la tradición de sus
            ancestros. En Ayana creemos que la artesanía es un acto de amor y
            resistencia, y estamos comprometidos a hacer de cada pieza un
            símbolo de solidaridad y respeto por el trabajo artesanal.<br></br>
            Un Sueño Bordado a Mano Ya sea un vestido especial, un cojín
            personalizado, una blusa detallada, o un par de zapatos únicos,
            Ayana transforma cada pedido en un proyecto especial, hecho a mano y
            a la medida. Nos apasiona crear piezas que reflejen tu personalidad
            y que lleven consigo el espíritu y la maestría de nuestros.<br></br>
            Únete a nosotros y lleva contigo una pieza de Ecuador, llena de
            tradición, autenticidad y amor por nuestras raíces.<br></br>{" "}
            <strong> Lema Ayana:</strong>
            <br></br>Cada puntada es un sueño, cada pieza es una historia.
          </p>
        </div>

        <div className="info-container">
          <h3></h3>
          <img src={ModeloBordado} width={318} height={800} />
        </div>

        <div className="info-container">
          <h3>Contáctanos</h3>
          <ContactForm />
        </div>
      </div>
      <br></br> <br></br>
      <button onClick={handleRedirect} className="btn btn-primary">
        Ir a la página de inicio
      </button>
    </div>
  );
};

export default AboutUs;
