import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../model/product';

interface InitialState {
  cart: IProduct[];
  product: IProduct;
}

const initialState: InitialState = {
  cart: [],
  product: {} as IProduct,
};

const productSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.product = payload;
    },
    addToCart: (state, { payload }) => {
      const productQuantity = state.cart.filter(
        (product) => product?.id === payload?.id
      );
      if (productQuantity?.length >= 10) return;
      state.cart = [...state.cart, payload];
    },
    reduceQuantity: (state, { payload }) => {
      const productIndex = state.cart.findIndex(
        (product) => product?.id === payload?.id
      );
      state.cart.splice(productIndex, 1);
    },
    removeFromCart: (state, { payload }) => {
      const removedProducts = state.cart.filter(
        (product) => product?.id !== payload?.id
      );
      state.cart = removedProducts;
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const {
  clearState,
  setProduct,
  addToCart,
  removeFromCart,
  reduceQuantity,
} = productSlice.actions;

export default productSlice.reducer;
