// src/pages/index.tsx
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ProductCard from '../components/Product/ProductCard';
import productList from '../models/Products/productList';

const HomePage: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;