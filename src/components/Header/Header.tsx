import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

type HeaderProps = {
  cartItemCount: number;
};

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/ut-longhorn-icon.jpg"
          alt="UT Longhorn Logo"
          style={{ height: '60px', width: 'auto' }}
        />
        <h1>Shopping Cart Demo</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaShoppingCart />
        <span>Cart Items: {cartItemCount}</span>
      </div>
    </header>
  );
};

export default Header;
