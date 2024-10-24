// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from '../src/components/navbar';
import Home from '../src/pages/home.js'; // Ejemplo de un componente de página


function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/checkout" element={<Home />} />
        <Route path="/payment" element={<Home />} />
        <Route path="/confirm" element={<Home />} />
        <Route path="/successdul" element={<Home />} />
        
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
