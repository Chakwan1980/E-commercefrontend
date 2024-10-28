import React, { useEffect, useState } from 'react';
import { createProducts, getProducts, deleteProducts, updateProducts } from '../api/api.js'; // Ajusta la ruta según tu estructura de archivos
import ProductCard from './ProductCard.js';

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

    const handleDelete = async (product_code) => {
        try {
            await deleteProducts(product_code);
            setProducts(products.filter(product => product.product_code !== product_code));
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    };

    const handleEdit = (product) => {
        // Aquí puedes implementar la lógica para editar el producto
        console.log("Editando producto:", product);
    };

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard 
                    key={product.product_code} 
                    product={product} 
                    onDelete={handleDelete} 
                    onEdit={handleEdit} 
                />
            ))}
        </div>
    );
};

export default ProductList;
