import React from 'react';

const ProductCard = ({ product, onDelete, onEdit }) => {
    const handleDelete = () => {
        onDelete(product.product_code);
    };

    const handleEdit = () => {
        // Lógica para manejar la edición del producto
        // Puedes abrir un modal o un formulario para editar el producto
        onEdit(product);
    };

    return (
        <div className="product-card">
            <img src={product.image_url} alt={product.product_name} />
            <h2>{product.product_name}</h2>
            <p>{product.product_description}</p>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <p>Categoría: {product.category}</p>
            <div className="button-group">
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
};

export default ProductCard;
