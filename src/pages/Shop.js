import React from 'react';
import './shop.css'; // Asegúrate de tener este archivo CSS

const Shop = ({ item, onRemove }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/products/code/${item.product_code}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }

            const result = await response.json();
            alert(result.message); // Notificar al usuario
            onRemove(item.product_code); // Llama a la función de eliminación pasada como prop
        } catch (error) {
            console.error('Error eliminando el producto:', error);
            alert('No se pudo eliminar el producto. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="shop-card">
            <img src={item.image_url} alt={item.product_name} className="shop-card-image" />
            <div className="shop-card-details">
                <h2 className="shop-card-title">{item.product_name}</h2>
                <p className="shop-card-description">{item.product_description}</p>
                <p className="shop-card-price">${item.price.toFixed(2)}</p>
                <button className="shop-card-button" onClick={handleDelete}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Shop;
