// src/pages/Confirm.js
import React from 'react';

const Aboutus = () => {
  return (
    <div class="container">
        <header>
            <h1>Sobre Nosotros</h1>
            <p>Conoce nuestra historia, misión y equipo.</p>
        </header>

        <section class="mission">
            <h2>Nuestra Misión</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>

        <section class="vision">
            <h2>Nuestra Visión</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>

        <section class="team">
            <h2>Conoce a Nuestro Equipo</h2>
            <div class="team-member">
                <img src="https://via.placeholder.com/150" alt="Jane Doe" />
                <h3>Jane Doe</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="team-member">
                <img src="https://via.placeholder.com/150" alt="John Smith" />
                <h3>John Smith</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="team-member">
                <img src="https://via.placeholder.com/150" alt="Emily Johnson" />
                <h3>Emily Johnson</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>

        <footer>
            <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </footer>
        </div>
  );
};

export default Aboutus;
