import React from 'react';
import Header from '../Header/Header';

type ProductDetailsProps = {
  product: { id: number; name: string; price: number; description: string };
  cartItemCount: number;
  incrementCartCount: (quantity?: number) => void;
  goBack: () => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  cartItemCount,
  incrementCartCount,
  goBack,
}) => {
  return (
    <div>
      <Header cartItemCount={cartItemCount} />
      <div style={{ padding: '20px', lineHeight: '1.6' }}>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            onClick={() => incrementCartCount(1)} // Update count here
          >
            Add to Cart
          </button>
          <button onClick={goBack}>Back to Products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
