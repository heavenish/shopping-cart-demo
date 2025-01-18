import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import ProductCard from '../components/Product/ProductCard';
import productList from '../models/Products/productList';

const HomePage: React.FC = () => {
  const router = useRouter();
  const { cart: cartString } = router.query;

  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);

  useEffect(() => {
    if (cartString) {
      try {
        setCart(JSON.parse(cartString as string));
      } catch {
        setCart([]);
      }
    }
  }, [cartString]);

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

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Header cartCount={cartCount} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            viewDetails={() =>
              router.push({
                pathname: `/product/${product.id}`,
                query: { cart: JSON.stringify(cart) },
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
