import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartOpen: false
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartOpen = true;
      state.cartItems.push(action.payload);
    },
    addMultipleToCart: (state, action) => {
      state.cartItems = [...state.cartItems, ...action.payload];
    },
    updateCartQuantity: (state, action) => {
      state.cartOpen = true;
      const donation = state.cartItems.find(item => item._id === action.payload._id);
      if (donation) {
        donation.purchaseQuantity = action.payload.purchaseQuantity;
      }
    },
    removeFromCart: (state, action) => {
      const newState = state.cartItems.filter(item => item._id !== action.payload);
      state.cartOpen = newState.length > 0;
      state.cartItems = newState;
    },
    clearCart: (state) => {
      state.cartOpen = false;
      state.cartItems = [];
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    }
  }
});

export const { actions, reducer } = cartSlice;
export default reducer;
