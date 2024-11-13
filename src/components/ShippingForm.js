import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext.js";// Importa el hook useCart
import "./shippingForm.css";

const ShippingForm = () => {
    const navigate = useNavigate();
    const { clearCart } = useCart(); // Accede a la función clearCart del contexto del carrito
    const [formData, setFormData] = useState({
        name: '',          
        last_name: '',     
        phone: '',
        email: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);  // Para verificar el contenido de formData
        try {
            const response = await fetch("http://localhost:3030/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                alert("¡Gracias por tu compra, hasta pronto!");
                clearCart(); // Vacía el carrito tras el envío exitoso
                navigate('/home'); // Redirige a la página de inicio
            } else {
                const errorData = await response.json();
                alert("Hubo un problema al enviar el formulario: " + errorData.error);
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error en la conexión. Inténtalo más tarde.");
        }
    };

    return (
        <div className="info-container">
            <h3>Datos de Envío</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Apellido:</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"  
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ShippingForm;
