import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    cart: [],
  },
  reducers: {},
});

export default homeSlice.reducer;
