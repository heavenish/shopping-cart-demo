import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ProductCard from '../components/Product/ProductCard';
import productList from '../models/Products/productList';
import ProductDetails from '../components/Product/ProductDetails';

const HomePage: React.FC = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [viewingProduct, setViewingProduct] = useState<number | null>(null);

  const incrementCartCount = (quantity: number = 1) => {
    setCartItemCount((prevCount) => prevCount + quantity);
  };

  if (viewingProduct !== null) {
    const product = productList.find((p) => p.id === viewingProduct);
    if (!product) return <p>Product not found!</p>;

    return (
      <ProductDetails
        product={product}
        cartItemCount={cartItemCount} // Pass the correct count
        incrementCartCount={incrementCartCount} // Pass the function to update count
        goBack={() => setViewingProduct(null)}
      />
    );
  }

  return (
    <div>
      <Header cartItemCount={cartItemCount} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => incrementCartCount(1)} // Ensure the count is updated here
            viewDetails={() => setViewingProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
