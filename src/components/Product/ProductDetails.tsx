import React from 'react';
import { useRouter } from 'next/router';
import productList from '../../models/Products/productList';
import Header from '../../components/Header/Header';

type ProductDetailsProps = {
  cart: { id: number; name: string; price: number; quantity: number }[];
  addToCart: (product: { id: number; name: string; price: number }) => void;
  productId: string | string[] | undefined;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ cart, addToCart, productId }) => {
  const router = useRouter();
  const product = productList.find((item) => item.id === parseInt(productId as string, 10));
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <Header cartCount={cartCount} />
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
