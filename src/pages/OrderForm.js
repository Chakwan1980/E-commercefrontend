import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FormularioEnvio = () => {
    const location = useLocation();
    const { totalAmount, userId, cart } = location.state || {}; // Se obtiene el carrito tambien esto llega desde checkout

    // Obtener el token de localStorage
    const token = localStorage.getItem("token");
    console.log("Token:", token); 

    // Estado para los campos del formulario
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    // Verificar que el token y los datos requeridos están presentes
    if (!token || !totalAmount || !userId) {
        return <div>Error: Faltan datos necesarios para procesar la orden. Por favor, asegúrate de haber iniciado sesión y tener el carrito listo.</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const orderData = {
            user_id: userId,
            first_name: firstName,
            last_name: lastName,
            phone,
            address,
            email,
            total: totalAmount
        };

        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Aquí se utiliza el token
                },
                body: JSON.stringify(orderData)
            });

            if (!response.ok) {
                throw new Error('Error al crear la orden');
            }

            const result = await response.json();
            console.log("Orden creada:", result);
            // Aquí podrías redirigir al usuario a una página de éxito o mostrar un mensaje
        } catch (error) {
            console.error("Error:", error);
            // Aquí podrías mostrar un mensaje de error al usuario
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nombre" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Apellido" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Teléfono" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Dirección" 
                value={address}
                onChange={(e) => setAddress(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input type="number" value={totalAmount} readOnly />
            <button type="submit">Crear Orden</button>
        </form>
    );
};

export default FormularioEnvio;

