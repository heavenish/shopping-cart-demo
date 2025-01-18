import React from 'react';

type ProductCardProps = {
  product: { id: number; name: string; price: number };
  addToCart: (product: { id: number; name: string; price: number }) => void;
  viewDetails: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, viewDetails }) => {
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
        <button
          style={{
            padding: '10px 15px',
            backgroundColor: '#BF5700',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
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
