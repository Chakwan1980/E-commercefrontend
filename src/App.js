import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './pages/Cartpage.js';
import Shop from './pages/Shop.js'
import Contact from './pages/Contact.js';
import Home from '../src/pages/Home.js';
import Aboutus from './pages/Aboutus.js';
import Navbar from './components/Navbar.js';
import Comprar from './pages/FormularioPago.js';
import ConfirmacionPago from './pages/ConfirmacionPago.js';
import Busqueda from './pages/Busqueda.js';
import CheckoutPage from './pages/Chekout.js';
import { CartProvider } from './components/CartContext.js';


function App() {
  

  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home  />} />
        <Route path='/comprar/:itemId' element={<Comprar />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/busqueda' element={<Busqueda />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/confirmacionpago' element={<ConfirmacionPago />} />
        <Route path='/cart/:itemId' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

   
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;