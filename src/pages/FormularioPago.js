import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./formulariopago.css"; // Asegúrate de tener estilos específicos si los necesitas

const FormularioPago = () => {
  const { itemId } = useParams(); // Obtener el id del producto
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    numeroTarjeta: "",
    fechaExpiracion: "",
    codigoSeguridad: ""
  });
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Manejo de cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

 // Manejo de envío del formulario
const handleSubmit = (e) => {
  e.preventDefault();
  // Aquí podrías agregar lógica para validar y procesar el pago
  console.log("ID del producto:", itemId); // Uso de itemId
  setPaymentConfirmed(true);
  setTimeout(() => navigate("/confirmacionpago"), 3000); // Redirige a la página de confirmación de pago
};

  return (
     <div className="main-container">  
    <div className="container-formulario-pago">
      <h2>Pago del Producto</h2>
      {paymentConfirmed ? (
        <p>Confirmando Pago un momento por favor ..</p>
      ) : (
        <form onSubmit={handleSubmit} className="pago-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre en la Tarjeta</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numeroTarjeta">Número de Tarjeta</label>
            <input
              type="text"
              id="numeroTarjeta"
              name="numeroTarjeta"
              value={formData.numeroTarjeta}
              onChange={handleChange}
              maxLength="16"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fechaExpiracion">Fecha de Expiración</label>
            <input
              type="text"
              id="fechaExpiracion"
              name="fechaExpiracion"
              placeholder="MM/AA"
              value={formData.fechaExpiracion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="codigoSeguridad">Código de Seguridad</label>
            <input
              type="password"
              id="codigoSeguridad"
              name="codigoSeguridad"
              maxLength="3"
              value={formData.codigoSeguridad}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Confirmar Pago
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default FormularioPago;
