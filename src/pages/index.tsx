import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import ProductCard from '../components/Product/ProductCard';
import productList from '../models/Products/productList';

type HomePageProps = {
  cart: { id: number; name: string; price: number; quantity: number }[];
  addToCart: (product: { id: number; name: string; price: number }) => void;
};

const HomePage: React.FC<HomePageProps> = ({ cart, addToCart }) => {
  const router = useRouter();
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
            viewDetails={() => router.push(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
