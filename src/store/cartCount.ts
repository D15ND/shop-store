import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Cards } from '@/types/Cards';

export type CartState = {
  products: Cards[];
};

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cards>) => {
      state.products = [...state.products, action.payload];
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
