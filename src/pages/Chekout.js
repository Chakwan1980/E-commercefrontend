import React, { useEffect } from "react";
import { useCart } from "../components/CartContext.js";
import { useNavigate } from "react-router-dom";
import "./home.css";

const BolsaAyana =
  "https://rosa-test-bucket-05112024.s3.eu-central-1.amazonaws.com/BolsaAyana.webp";



const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Calcular el monto total del carrito
  const totalAmount = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  // Función para navegar a la página anterior
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Crear el script de PayPal
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AV3O8KgzH99AraF38ME-OGDEUWkS4Q4ERHpl9xhzhYbHRi4EgoDcTl8r6s7W3J1acweWJUBfGKPdxyYM";
    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalAmount.toFixed(2), // Usar el total del carrito aquí
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  "Pago realizado con éxito: " + details.payer.name.given_name
                );
                navigate("/success"); // Navegar a la página de éxito
              });
            },
            onCancel: () => {
              alert("El proceso de pago fue cancelado.");
            },
            onError: (err) => {
              console.error("Error en el proceso de pago: ", err);
              alert("Hubo un error en el proceso de pago. Por favor, inténtelo de nuevo.");
            },
          })
          .render("#paypal-button-container"); // Renderizar el botón de PayPal en el contenedor
      }
    };
    document.body.appendChild(script);

    // Limpiar el script cuando se desmonte el componente
    return () => {
      document.body.removeChild(script);
    };
  }, [totalAmount, navigate]);

  return (
    <div className="container-CART">
      <div className="product-grid-CART">
        <h2>Productos en el Carrito:</h2>
        <h3 className="total">Total a Pagar: ${totalAmount.toFixed(2)}</h3>

        <ul>
          {cart.map((item) => (
            <li key={item.product_code}>
              <img
                src={item.image_url || "https://via.placeholder.com/150"}
                className="card-img-top-1"
                alt={item.product_name}
                width={120}
              />
              {item.product_name} - {item.quantity} x $
              {parseFloat(item.price).toFixed(2)} = $
              {(parseFloat(item.price) * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>

        <p>
          Estimado cliente, le agradecemos sinceramente la confianza depositada
          en nosotros. Una vez confirmada su compra, le invitamos a completar el
          formulario con sus datos personales, dirección de envío y preferencias
          de color. Estaremos encantados de asesorarle en todo lo que necesite
          para garantizar que su experiencia sea plenamente satisfactoria.
        </p>

        <div id="paypal-button-container"></div>

        <img
          src={BolsaAyana}
          width={200}
          className="img-right"
          alt="Bolsa Ayana"
        />
      </div>
      <button onClick={handleGoBack} className="pay-button">
        Regresar
      </button>
    </div>
  );
};

export default Checkout;