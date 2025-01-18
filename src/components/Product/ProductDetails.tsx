import React from 'react';
import { useRouter } from 'next/router';
import productList from '../../models/Products/productList';
import Header from '../../components/Header/Header';

type ProductDetailsProps = {
  productId: string | string[] | undefined;
  addToCart: (product: { id: number; name: string; price: number }) => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId, addToCart }) => {
  const router = useRouter();
  const product = productList.find((item) => item.id === parseInt(productId as string, 10));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <Header />
      <div style={{ padding: '20px', lineHeight: '1.6' }}>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
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
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/')}
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
