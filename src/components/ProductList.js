import React from "react";
import ProductCard from "../components/ProductCard.js";
import './card.css'

const ProductList = ({ products }) => {
    return (
        <div>
              <hr className="horizontal-line" />
        <div>
            <div className="center-text"> <h1> Nuestro Catalogo</h1></div>
        <div className="product-list">
          
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
        </div>
    );
};

export default ProductList;






