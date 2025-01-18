import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '../../store/store';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);
  const router = useRouter();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '2px solid #333f48',
        backgroundColor: '#BF5700',
        color: '#fff',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
        }}
        onClick={() => router.push('/')}
      >
        <img
          src="/ut-longhorn-icon.jpg"
          alt="UT Longhorn Logo"
          style={{ height: '60px', width: 'auto' }}
        />
        <h1>Shopping Cart Demo</h1>
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        onClick={() => router.push('/checkout')}
      >
        <FaShoppingCart />
        <span>Cart Items: {cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
