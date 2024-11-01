import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.js';
import Shop from './pages/Shop.js'
import Test from './pages/Contact.js';
import Home from '../src/pages/Home.js';
import Payment from './pages/Payment.js';
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
       
        <Route path='/test' element={<Test />} />
        <Route path='/confirmacionpago' element={<ConfirmacionPago />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/payment' element={<Payment />} />

   
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
