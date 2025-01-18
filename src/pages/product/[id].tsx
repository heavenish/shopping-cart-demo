import React from 'react';
import { useRouter } from 'next/router';
import ProductDetails from '../../components/Product/ProductDetails';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ProductDetails productId={id} />;
};

export default ProductPage;
