// ProductQuantity.js
import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext.js';

const ProductQuantity = ({ productId, onTotalChange }) => {
    const { addProductToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        useEffect(() => {
            const fetchProduct = async (productId) => {
                try {
                    const response = await fetch(`/api/products/${productId}`);
                    const responseText = await response.text(); // Obtener la respuesta como texto
                    
                    // Imprimir la respuesta cruda para ver qué se está devolviendo
                    console.log('Respuesta de la API:', responseText);
                    
                    if (!response.ok) {
                        throw new Error(`Error ${response.status}: ${responseText}`);
                    }
                    
                    // Intenta parsear el texto como JSON
                    const productData = JSON.parse(responseText);
                    // Asegúrate de que el precio sea un número
                    productData.price = parseFloat(productData.price);
                    setProduct(productData); // Actualiza el estado del producto
                } catch (error) {
                    console.error('Error al buscar el producto:', error);
                }
            };
        
            fetchProduct(productId);
        }, [productId]);
        

        fetchProduct(productId);
    }, [productId]);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handlePurchase = () => {
        addProductToCart({ ...product, quantity });
        alert(`Agregaste ${quantity} ${product.product_name} al carrito.`);
    };

    if (!product) return <div>Cargando producto...</div>;

    return (
        <div className="product-quantity">
            <h5>{product.product_name}</h5>
            <p>Precio por unidad: ${parseFloat(product.price).toFixed(2)}</p>
            <div className="quantity-controls">
                <button onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            <button className="add-to-cart" onClick={handlePurchase}>COMPRAR</button>
        </div>
    );
};

export default ProductQuantity;
