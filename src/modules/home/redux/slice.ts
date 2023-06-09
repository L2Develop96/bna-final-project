import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    cart: [],
  },
  reducers: {},
});

export default productSlice.reducer;
