import React from "react";
import ProductCard from "../components/ProductCard.js";
import './productcard.css'

const ProductList = ({ products }) => {
    return (
        <div>
              <hr className="horizontal-line" />
        <div>
            <div > <h1 className="text-h1"> Nuestro Catalogo</h1></div>
        <div className="product-container">
          
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
        </div>
    );
};

export default ProductList;






