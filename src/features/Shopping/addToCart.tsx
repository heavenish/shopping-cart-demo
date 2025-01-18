import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

type AddToCartButtonProps = {
  product: { id: number; name: string; price: number };
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      style={{
        padding: '10px 15px',
        backgroundColor: '#BF5700',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={() => dispatch(addToCart(product))}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
