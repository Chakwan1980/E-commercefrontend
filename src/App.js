import React  from "react"; // Asegúrate de que useState esté importado
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.js";
import Shop from "./pages/Shop.js";
import ThankYou from "./pages/ThankYou.js";
import Home from "./pages/Home.js";
import Payment from "./pages/Payment.js";
import Navbar from "./components/Navbar.js";
import Comprar from "./pages/FormularioPago.js";
import ConfirmacionPago from "./pages/ConfirmacionPago.js";
import CheckoutPage from "./pages/Chekout.js";
import { CartProvider } from "./components/CartContext.js";
import { UserProvider } from "./components/UserContext.js"; // Importa el UserProvider
import Footer from "./components/footer.js";
import Search from "./components/Search.js";
import HistorySection from "./pages/Nosotros.js";
import Login from  "./pages/Login.js"
import Register from "./pages/Register.js";


import './App.css';

const App = () => {
  

  return (
    <UserProvider> {/* Envolver con UserProvider */}
    <CartProvider>
      <Router>
        <div className="app">
        <Navbar />

          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/comprar/:itemId" element={<Comprar />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/catalogo" element={<Search />} /> {/* Ruta para Search */}
              <Route path="/aboutus" element={<HistorySection />} />
              <Route path="/confirmacionpago" element={<ConfirmacionPago />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/success" element={<ThankYou />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element= {<Register/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
    </UserProvider>
  );
}

export default App;

