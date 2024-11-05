import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/api.js'; // Asegúrate de que la ruta sea correcta
import './login.css';


const Register = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(userData);
            console.log(response.message); // Mensaje de éxito
        } catch (err) {
            setError('Error al registrar el usuario. Inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="Nombre" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Apellido" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
            <button type="submit">Registrar</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default Register;