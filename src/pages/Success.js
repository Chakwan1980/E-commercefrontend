import React from "react";
import ShippingForm from "../components/ShippingForm.js";
import "./payment.css";

    const Success = () => {
      return (
        <div>  <h1 className="title-blog">  🎉¡Gracias por tu compra!..</h1>
              <hr></hr> 
        <div className="success-container">
             
          <div className="thank-you-container">
           
            <p>
              Tu pedido ha sido procesado exitosamente. Por favor rellena el
              formulario con tus datos y dirección de envío.
            </p>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
           
          </div >
          
          <ShippingForm />
        </div>
        </div>
      );
    };
    
    export default Success;
    