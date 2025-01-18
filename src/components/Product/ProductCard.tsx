// src/components/Product/ProductCard.tsx
import React from 'react';

type ProductCardProps = {
  product: { id: number; name: string; price: number };
  addToCart: (product: { id: number; name: string; price: number }) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
