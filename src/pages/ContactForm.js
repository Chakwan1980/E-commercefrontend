import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../pages/Aboutus.css';
import { addInformation } from '../api/informationApi.js';

const ContactForm = () => {
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        name: '',
        telefono: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log("Datos a enviar:", contact); // Verificar los datos antes de enviar
  
      try {
          const response = await addInformation(contact);
          alert('Formulario enviado correctamente');
          navigate('/home');
      } catch (error) {
          console.error("Error en el envío:", error.response ? error.response.data : error.message);
          alert('Hubo un problema al enviar el formulario: ' + error.message);
      }
  };
  
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={contact.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" value={contact.telefono} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={contact.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="5" value={contact.mensaje} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
