import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api.js'; // Ajusta la ruta según tu estructura de archivos
import Shop from './Shop.js';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleRemove = (product_code) => {
        setProducts(products.filter(product => product.product_code !== product_code));
    };

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className="shop-container">
            <h1>Compras Recientes</h1>
            {products.map(item => (
                <Shop key={item.product_code} item={item} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default ProductList;
