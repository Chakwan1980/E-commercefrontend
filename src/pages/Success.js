import React from "react";
import ShippingForm from "../components/ShippingForm.js";
import "./payment.css";

    const Success = () => {
      return (
        <div className="success-container">
          <div className="thank-you-container">
            <div className="thank-you-icon">🎉</div>
            <h2>¡Gracias por tu compra!</h2>
            <p>
              Tu pedido ha sido procesado exitosamente. Por favor rellena el
              formulario con tus datos y dirección de envío.
            </p>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
           
          </div >
          
          <ShippingForm />
        </div>
      );
    };
    
    export default Success;
    