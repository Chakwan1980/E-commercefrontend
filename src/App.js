import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.js";
import Shop from "./pages/Shop.js";
import ThankYou from "./pages/Success.js";
import Home from "./pages/Home.js";

import Navbar from "./components/Navbar.js";

import ConfirmacionPago from "./pages/ConfirmacionPago.js";
import CheckoutPage from "./pages/Chekout.js";
import { CartProvider } from "./components/CartContext.js";
import { UserProvider } from "./components/UserContext.js";
import Footer from "./components/footer.js";
import Search from "./components/Search.js";

import BlogPage from "./pages/Blog.js";
import PaginaFotos from "./pages/NuestraHistoria.js";

import { SearchProvider } from "./components/SearchContext.js";
import Tienda from "./pages/Tienda.js";
import './App.css';

import "./App.css";

const App = () => {
  return (
    <SearchProvider>
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Navbar />

            <div className="app-content">
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
               
                <Route path="/shop" element={<Shop />} />
                <Route path="/catalogo" element={<Search />} />{" "}
               
                <Route
                  path="/confirmacionpago"
                  element={<ConfirmacionPago />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/success" element={<ThankYou />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/nuestrahistoria" element={<PaginaFotos />} />
              
             
                


                
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
    </SearchProvider>
  );
};

export default App;
