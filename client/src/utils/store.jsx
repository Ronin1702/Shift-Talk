import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice';
import categoryReducer from './reducers/categorySlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    category: categoryReducer
  }
});

export default store;
