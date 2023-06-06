import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../modules/auth/redux';
import homeSlice from '../modules/home/redux';

const store = configureStore({
  reducer: {
    auth: authSlice,
    home: homeSlice,
  },
});

export default store;
