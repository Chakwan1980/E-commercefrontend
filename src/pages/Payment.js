import React, { useState } from "react";
import { useCart } from "../components/CartContext.js";
import { useNavigate } from "react-router-dom";
import "./payment.css"; // Importa tu archivo CSS
import Visa from "../fotos/visa.png";
import Paypal from "../fotos/paypal.png";
import Mastercard from "../fotos/mastercard.png";

const Payment = () => {
  const { cart } = useCart();
  const totalAmount = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );
  const [cardHolderName, setCardHolderName] = useState(""); // Cambiado el estado a cardHolderName
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Pago procesado exitosamente!");
    navigate("/thank-you"); // Navega a la página de agradecimiento
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const formattedExpiryDate = expiryDate.length === 5 ? expiryDate : "MM/AA";

  return (
    <div className="container-payment">
      <h2>Pagar</h2>
      <h3>Total a Pagar: ${totalAmount.toFixed(2)}</h3>
      <div className="card-preview">
        <h4>Vista Previa de la Tarjeta</h4>
        <div className="credit-card">
          <div className="card-number">
            {cardNumber
              ? cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ")
              : "#### #### #### ####"}
          </div>
          <div className="card-details">
            <div className="card-holder">
              {cardHolderName || "NOMBRE DEL TITULAR"}
            </div>
            <div className="card-expiry">{formattedExpiryDate}</div>
          </div>
        </div>
      </div>
      <form onSubmit={handlePayment}>
        <div>
          <label htmlFor="cardHolderName">Nombre del Titular:</label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(
                e.target.value
                  .replace(/\s/g, "")
                  .slice(0, 16)
                  .replace(/(\d{4})(?=\d)/g, "$1 ")
              )
            }
            required
          />
        </div>
        <div className="expiry-cvv-container">
          <div>
            <label htmlFor="expiryDate">Fecha de Expiración (MM/AA):</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) =>
                setExpiryDate(
                  e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 4)
                    .replace(/(\d{2})(?=\d)/g, "$1/")
                )
              }
              required
              placeholder="MM/AA"
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="card-icons">
          <img src={Visa} alt="Visa" />
          <img src={Mastercard} alt="MasterCard" />
          <img src={Paypal} alt="American Express" />
        </div>
        <div className="button-container">
          <button type="submit" className="pay-button">
            Pagar
          </button>
          <button type="button" onClick={handleGoBack} className="pay-button">
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
