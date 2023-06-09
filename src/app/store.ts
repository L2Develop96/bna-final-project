import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../modules/auth/redux';
import productSlice from '../modules/home/redux';

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
