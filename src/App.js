import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.js";
import Shop from "./pages/Shop.js";
import ThankYou from "./pages/Success.js";
import Home from "./pages/Home.js";
import Payment from "./pages/Payment.js";
import Navbar from "./components/Navbar.js";
import Comprar from "./pages/FormularioPago.js";
import ConfirmacionPago from "./pages/ConfirmacionPago.js";
import CheckoutPage from "./pages/Chekout.js";
import { CartProvider } from "./components/CartContext.js";
import { UserProvider } from "./components/UserContext.js";
import Footer from "./components/footer.js";
import Search from "./components/Search.js";
import AboutUs from "./pages/AboutUs.js";
import Register from "./pages/Register.js";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
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
                <Route path="/catalogo" element={<Search />} />{" "}
                <Route path="/aboutus" element={<AboutUs />} />
                <Route
                  path="/confirmacionpago"
                  element={<ConfirmacionPago />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<ThankYou />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
