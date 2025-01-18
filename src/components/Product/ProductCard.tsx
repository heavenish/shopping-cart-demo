import React from 'react';
import AddToCartButton from '../../features/Shopping/addToCart';

type ProductCardProps = {
  product: { id: number; name: string; price: number; description?: string };
  viewDetails: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, viewDetails }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-start',
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <AddToCartButton product={product} />
        <button
          style={{
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={viewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
