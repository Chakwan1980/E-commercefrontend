import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/api.js';
import './cartpage.css'

const CartPage = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await getProducts();

                // Convertimos itemId a cadena para que coincida con la estructura de datos
                const foundItem = products.find(product => String(product.id) === String(itemId));

                if (foundItem) {
                    setItem(foundItem);
                } else {
                    setError("Producto no encontrado");
                }
            } catch (err) {
                console.error("Error al cargar el producto:", err);
                setError("No se pudo cargar el producto");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [itemId]);

    if (loading) return <div>Cargando producto...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='container-cartepage'>
            <h1>Detalle del Producto</h1>
            {item ? (
                <div className="card" style={{ width: '18rem' }}>
                    <img 
                        src={item.image_url || "https://via.placeholder.com/150"} 
                        className="card-img-top" 
                        alt={item.product_name} 
                    />
                    <div className="card-body-Grid">
                        <h5 className="card-title">{item.product_name}</h5>
                        <p className="card-text">{item.product_description}</p>
                        <p className="card-text">Precio: ${item.price}</p>
                    </div>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
};

export default CartPage;


