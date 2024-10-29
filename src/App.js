// src/App.js
import React ,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './pages/Cartpage.js';
import Shop from './pages/Shop.js'
import Contact from './pages/Contact.js';
import Home from '../src/pages/Home.js';
import Products from './pages/Products.js'
import Aboutus from './pages/Aboutus.js';
import Navbar from './components/Navbar.js'; // Asegúrate de que la ruta sea correcta




function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home  />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart/:itemId' element={<CartPage />} />
   
      </Routes>
    </Router>
  );
}

export default App;