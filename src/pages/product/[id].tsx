import React from 'react';
import { useRouter } from 'next/router';
import ProductDetails from '../../components/Product/ProductDetails';

type ProductPageProps = {
  cart: { id: number; name: string; price: number; quantity: number }[];
  addToCart: (product: { id: number; name: string; price: number }) => void;
};

const ProductPage: React.FC<ProductPageProps> = ({ cart, addToCart }) => {
  const router = useRouter();
  const { id } = router.query;

  return <ProductDetails cart={cart} addToCart={addToCart} productId={id} />;
};

export default ProductPage;
