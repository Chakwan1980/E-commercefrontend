
import React, { useState } from 'react';
import '../pages/home.css'

const Search = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); 
  };

  const handleClear = () => {
    setQuery(''); 
    onClear(); 
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