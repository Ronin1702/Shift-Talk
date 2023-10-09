import { configureStore } from '@reduxjs/toolkit';
import donationsReducer from './reducers/donationsSlice';
import cartReducer from './reducers/cartSlice';
import categoryReducer from './reducers/categorySlice';

const store = configureStore({
  reducer: {
    donations: donationsReducer,
    cart: cartReducer,
    category: categoryReducer
  }
});

export default store;
