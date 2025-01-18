import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addToCart, decrementQuantity, removeFromCart } from '../../store/slices/cartSlice';
import Header from '../../components/Header/Header';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Checkout</h1>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
            border: '1px solid #ddd',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Price</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Quantity</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>${item.price}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.quantity}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <button
                    style={{
                      padding: '5px 10px',
                      marginRight: '5px',
                      backgroundColor: '#BF5700',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                  <button
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#333',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <button
                    style={{
                      padding: '5px 10px',
                      marginLeft: '5px',
                      backgroundColor: '#FF0000',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 style={{ marginTop: '20px', fontSize: '1.5em' }}>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CheckoutPage;
