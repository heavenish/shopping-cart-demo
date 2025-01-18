import React from 'react';
import { useRouter } from 'next/router';
import ProductDetails from '../../components/Product/ProductDetails';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { cart: cartString } = router.query;

  const cart = cartString ? JSON.parse(cartString as string) : [];

  const addToCart = (product: { id: number; name: string; price: number }) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    // Update query parameters with the new cart state
    router.push({
      pathname: router.pathname,
      query: { ...router.query, cart: JSON.stringify(updatedCart) },
    });
  };

  return <ProductDetails cart={cart} addToCart={addToCart} />;
};

export default ProductPage;
