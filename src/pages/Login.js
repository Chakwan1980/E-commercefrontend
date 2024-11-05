import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        // Aquí iría la lógica para autenticar al usuario
        // Por ejemplo, puedes hacer un fetch a tu API de login
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Guarda el token en el localStorage
            navigate('/'); // Redirige a la página principal o a donde desees
        } catch (error) {
            console.error('Error:', error);
            alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div className="user-options">
                <p>¿Eres un nuevo usuario?</p>
                <button onClick={() => navigate('/register')}>Regístrate aquí</button>
            </div>
            <div className="user-options">
                <p>¿Ya tienes cuenta?</p>
                <button onClick={() => navigate('/login')}>Inicia sesión aquí</button>
            </div>
        </div>
    );
};

export default Login;
