// src/components/Search.js
import React, { useState } from 'react';
import '../pages/home.css'

const Search = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); /*llama a la funcio onSearch que se le pasa como prop */
  };

  const handleClear = () => {
    setQuery(''); // Limpia el campo de entrada
    onClear(); // Llama a la función para limpiar resultados
  };

  return (
    <div className='search-1'>
     <form onSubmit={handleSearch} className="search-form">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
        />
        <button className='button' type="submit">Buscar</button>
        <button className="button" type="button" onClick={handleClear}>Borrar</button>
      </div>
    </form>
    </div>
  );
};

export default Search;
