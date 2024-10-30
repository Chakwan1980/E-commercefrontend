import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/api.js';
import '../pages/shop.css'
// Asegúrate de tener este archivo CSS
import AddToCartButton from '../components/AddButton.js';


const Shop = () => {
    const [items, setItems] = useState([]); // Estado para almacenar los productos
    const [loading, setLoading] = useState(true); // Estado de carga

    // Función para obtener productos
    const fetchProducts = async () => {
        try {
            const products = await getProducts(); // Llama a getProducts
            setItems(products); // Establece los productos en el estado
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false); // Cambia el estado de carga
        }
    };

    useEffect(() => {
        fetchProducts(); // Llama a la función para obtener productos al montar el componente
    }, []);

    const handleRemove = (productCode) => {
        setItems((prevItems) => prevItems.filter(item => item.product_code !== productCode));
    };

    if (loading) {
        return <p>Cargando productos...</p>; // Mensaje mientras se cargan los productos
    }

    return (
        <div className="product-grid"> {/* Clase contenedora para grid */}
            {items.map(item => (
                <div key={item.product_code} className="product-card-1">
                    <img src={item.image_url} alt={item.product_name} className="card-img-top" />
                    <div className="card-body">
                        <h2 className="shop-card-title-1">{item.product_name}</h2>
                        <p className="shop-card-description-1">{item.product_description}</p>
                        <p className="shop-card-price-1">${parseFloat(item.price).toFixed(2)}</p>
                       <AddToCartButton/>
                    </div>
                </div>
            ))}
        </div>
    );
    
    
};

export default Shop;