
// components/Sidebar.js
import React from 'react';
import Search from './Search.js'; // Asegúrate de que la ruta sea correcta
import './Sidebar.css'
const Sidebar = ({ onSearch, onClear }) => {
  return (
    <div className="sidebar">
      <h2>Buscar Productos</h2>
      <Search onSearch={onSearch} onClear={onClear} />
      {/* Puedes agregar más elementos aquí si es necesario */}
    </div>
  );
};

export default Sidebar;
