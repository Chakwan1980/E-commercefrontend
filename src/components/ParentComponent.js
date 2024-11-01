import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductSearchByCategory from "./ProductSearchByCategory.js";
import ProductCard from "./ProductCard.js";

const ParentComponent = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = async (category) => {
    const fetchedProducts = await getProductsByCategory(category); 
    setProducts(fetchedProducts);
  };

  const addToCart = (product, quantity) => {
    console.log("Added to cart:", product, "Quantity:", quantity);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <ProductSearchByCategory products={products} />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard 
            key={product.id}  
            product={product} 
            addToCart={addToCart}  // Pass addToCart to ProductCard
          />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
