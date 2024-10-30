import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api.js'; // Asegúrate de que la ruta de importación sea correcta

const ProductQuantity = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await getProducts(); // Obtener todos los productos
                if (products.length > 0) {
                    setProduct(products[0]); // Usar el primer producto (ajusta según tus necesidades)
                } else {
                    console.error("No hay productos disponibles");
                }
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };

        fetchProduct();
    }, []);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    // Maneja el caso donde el producto no está disponible
    if (!product) return <div>Cargando producto...</div>; // Mensaje de carga

    // Convierte el precio a número si es un string
    const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;

    // Maneja el caso en que el precio no es un número
    if (isNaN(price)) {
        console.error("El precio del producto no es un número válido");
        return <div>Error: precio no válido.</div>; // Manejo de error
    }

    const totalPrice = (quantity * price).toFixed(2); // Calcula el precio total

    return (
        <div className="product-quantity">
            <h5>{product.product_name}</h5>
            <p>Precio por unidad: ${price.toFixed(2)}</p>
            <div className="quantity-controls">
                <button onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            <p>Total: ${totalPrice}</p>
            <button className="add-to-cart">Agregar al carrito</button>
        </div>
    );
};

export default ProductQuantity;

