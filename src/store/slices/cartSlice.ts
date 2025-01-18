import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  cartCount: number;
};

const initialState: CartState = {
  items: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number; name: string; price: number }>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.cartCount += 1;
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.cartCount -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
          state.cartCount -= 1;
        }
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      if (itemToRemove) {
        state.cartCount -= itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
