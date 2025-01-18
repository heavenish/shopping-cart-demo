import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import ProductCard from '../components/Product/ProductCard';
import productList from '../models/Products/productList';
import { RootState } from '../store/store';
import { addToCart } from '../store/slices/cartSlice';

const HomePage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={(product) => dispatch(addToCart(product))}
            viewDetails={() => router.push(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
