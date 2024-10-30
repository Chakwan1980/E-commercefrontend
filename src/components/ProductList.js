import './list.css'; // Archivo CSS para las tarjetas
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api.js'; // Asegúrate de que la ruta sea correcta
import AddToCartButton from './AddButton.js'; // Asegúrate de tener este componente

const ProductList = () => {
    const [products, setProducts] = useState([]); // Estado para los productos
    const [loading, setLoading] = useState(true); // Estado para el loading
    const [error, setError] = useState(null); // Estado para el error
    const [rating, setRating] = useState(3);

    const handleStarClick = (newRating) => {
        setRating(newRating);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(); // Llama a la función getProducts
                console.log('Datos recibidos:', data); // Verifica los datos aquí
                setProducts(Array.isArray(data) ? data : []); // Asigna los productos
            } catch (err) {
                console.error('Error al cargar productos:', err);
                setError('Error al cargar productos: ' + err.message); // Manejo del error
            } finally {
                setLoading(false); // Cambia el estado de loading
            }
        };
    
        fetchProducts(); // Ejecuta la función de obtención de productos
    }, []); // Solo se ejecuta al montar el componente

    // Renderizado condicional
    if (loading) return <div>Cargando productos...</div>; // Mensaje de carga
    if (error) return <div>Error al cargar productos: {error}</div>; // Mensaje de error

    // Renderiza la lista de productos
    return (
        <div >
            <div className="card-container">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img 
                                src={product.image_url || "https://via.placeholder.com/150"} 
                                className="card-img-top" 
                                alt={product.product_name} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.product_name}</h5>
                                <p className="card-text">{product.product_description}</p>
                                <p className="card-text">{product.product_code}</p>
                                <p className="card-text">Precio: ${product.price}</p>
                                <p className="card-text">Categoría: {product.category}</p>
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
                                <AddToCartButton itemId={product.id} /> {/* Botón para agregar al carrito */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

