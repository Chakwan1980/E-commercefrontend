
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ addToCart, products }) => {
    const { id } = useParams();
    const product = products.find(prod => prod.id === parseInt(id));

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="card-container">
            <div className="card">
                <img 
                    src={product.image_url || "https://via.placeholder.com/150"} 
                    className="card-img-top" 
                    alt={product.product_name} 
                />
                <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text">{product.product_description}</p>
                    <p className="card-text">Precio: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
