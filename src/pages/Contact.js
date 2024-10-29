// src/pages/Successful.js
import React from 'react';
import '../components/contact.css'

const Contact = () => {
  return (
    < div className ="forma">
    <div className="container-1"> {/* Cambié 'class' a 'className' */}
      <header className='hea'>
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. Completa el formulario o contáctanos directamente.</p>
      </header>

      <section className="contact-form"> {/* Cambié 'class' a 'className' */}
        <h2>Formulario de Contacto</h2>
        <form>
          <div className="form-group"> {/* Cambié 'class' a 'className' */}
            <label htmlFor="name">Nombre:</label> {/* Cambié 'for' a 'htmlFor' */}
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group"> {/* Cambié 'class' a 'className' */}
            <label htmlFor="email">Correo Electrónico:</label> {/* Cambié 'for' a 'htmlFor' */}
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group"> {/* Cambié 'class' a 'className' */}
            <label htmlFor="message">Mensaje:</label> {/* Cambié 'for' a 'htmlFor' */}
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensaje</button> {/* Cambié 'class' a 'className' */}
        </form>
      </section>

      <section className="contact-methods"> {/* Cambié 'class' a 'className' */}
        <h2>Otras Formas de Contacto</h2>
        <div className="contact-option"> {/* Cambié 'class' a 'className' */}
          <h3>WhatsApp</h3>
          <p>¿Prefieres chatear? Contáctanos por WhatsApp.</p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-button">Enviar Mensaje por WhatsApp</a> {/* Cambié 'class' a 'className' */}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
    </div>
  );
};

export default Contact;

