import React from 'react';
import { useRouter } from 'next/router';
import productList from '../../models/Products/productList';
import ProductDetails from '../../components/Product/ProductDetails';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = productList.find((p) => p.id === parseInt(id as string, 10));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <ProductDetails
      product={product}
      cartItemCount={0} // Replace with global state if needed
      incrementCartCount={() => {}} // Replace with global state if needed
      goBack={() => router.push('/')}
    />
  );
};

export default ProductPage;
