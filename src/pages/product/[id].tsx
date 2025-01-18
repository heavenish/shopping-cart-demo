import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import ProductDetails from '../../components/Product/ProductDetails';
import { addToCart } from '../../store/slices/cartSlice';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  return (
    <ProductDetails
      productId={id}
      addToCart={(product) => dispatch(addToCart(product))}
    />
  );
};

export default ProductPage;
