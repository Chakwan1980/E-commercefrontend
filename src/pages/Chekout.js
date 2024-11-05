import React, { useEffect } from 'react';
import { useCart } from '../components/CartContext.js';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Asegúrate de importar el CSS

const Checkout = () => {
    const { cart } = useCart(); // Obtén los elementos del carrito
    const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0); // Calcula el total
    const navigate = useNavigate(); // Hook para acceder a la navegación

    // Función para manejar la redirección al pago
    const handleContinueToPayment = () => {
        localStorage.setItem('totalAmount', totalAmount.toFixed(2)); // Guardar el total en localStorage
        navigate('/payment'); // Redirige a la página de pago
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AV3O8KgzH99AraF38ME-OGDEUWkS4Q4ERHpl9xhzhYbHRi4EgoDcTl8r6s7W3J1acweWJUBfGKPdxyYM`; // Reemplaza TU_CLIENT_ID con tu Client ID real
        script.async = true;
        script.onload = () => {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalAmount.toFixed(2), // Usar el total aquí
                            },
                        }],
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert('Pago realizado con éxito: ' + details.payer.name.given_name);
                        navigate('/success'); // Redirige a la página de éxito
                    });
                },
                onError: (err) => {
                    console.error('Error en el proceso de pago: ', err);
                },
            }).render('#paypal-button-container'); // Renderizar el botón de PayPal en el contenedor
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Limpiar el script al desmontar
        };
    }, [totalAmount, navigate]);

    return (
        <div className='container-CART'> 
            <div className="product-grid-CART">
                <h2> Productos en el Carrito: </h2>
                <h3 className="total">Total a Pagar: ${totalAmount.toFixed(2)}</h3>
                <h4>Resumen de Compra</h4>
                <ul>
                    {cart.map(item => (
                        <li key={item.product_code}>
                            <img 
                                src={item.image_url || "https://via.placeholder.com/150"} 
                                className='card-img-top-1'
                                alt={item.product_name} 
                                width={120}
                            />
                            {item.product_name} - {item.quantity} x ${parseFloat(item.price).toFixed(2)} = ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${totalAmount.toFixed(2)}</h3>
                <div id="paypal-button-container"></div> {/* Contenedor para el botón de PayPal */}
                <button onClick={handleContinueToPayment} className="pay-button">Continuar al Pago</button>
                <button onClick={handleGoBack} className="pay-button">Regresar</button>
            </div>
        </div>
    );
};

export default Checkout;
