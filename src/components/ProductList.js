import "./list.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api.js";
import { useNavigate } from "react-router-dom";

 
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(3);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Obtén la función de navegación al nivel superior

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Error al cargar productos: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleStarClick = (newRating) => setRating(newRating);

  // Añadir producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    console.log("Producto añadido al carrito:", product);
    console.log("Estado actual del carrito:", cart);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular el total a pagar
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Simulación de proceso de pago
  const proceedToPayment = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de continuar.");
      return;
    }
    navigate('/checkout', { state: { cart } });
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos: {error}</div>;


  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card-1">
            <img
              src={product.image_url || "https://via.placeholder.com/150"}
              className="card-img-top"
              alt={product.product_name}
            />
            <div className="card-body">
              <h5 className="shop-card-title-1">{product.product_name}</h5>
              <p className="shop-card-description-1">{product.product_description}</p>
              <p className="shop-card-description-1">{product.product_code}</p>
              <p className="shop-card-description-1">Precio: ${product.price}</p>
              <p className="shop-card-price-1">Categoría: {product.category}</p>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rating ? "star filled" : "star"}
                    onClick={() => handleStarClick(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button onClick={() => addToCart(product)}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>

      {/* Carrito de compras */}
      <div className="cart">
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>
                  {item.product_name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
                </span>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div>
            <h3>Total a pagar: ${getTotalAmount().toFixed(2)}</h3>
            <button onClick={proceedToPayment}>Proceder al Pago</button>
            <button onClick={clearCart}>Vaciar Carrito</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

