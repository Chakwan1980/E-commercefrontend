import React from 'react';
import './confirmacionpago.css';
import { useNavigate } from "react-router-dom";

const ConfirmacionPago = () => {
  const navigate = useNavigate();

  // Función para manejar la redirección
  const handleRedirect = () => {
    navigate('/home'); // Redirige a la página de inicio
  };

  return (

    <div className="confirmacion-container">
      <div className="confirmacion-mensaje">
        <h2>¡Felicidades!</h2>
        <p>Usted ha comprado el producto con éxito.</p>
        <p>Gracias por su compra.</p>
        <button onClick={handleRedirect} className="btn btn-primary">
          Ir a la página de inicio
        </button>
      </div>
    </div>
   
  );
};

export default ConfirmacionPago;
