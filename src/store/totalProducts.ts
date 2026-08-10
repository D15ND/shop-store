import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TotalProductsState = {
  total: number;
};

const initialState: TotalProductsState = {
  total: 0,
};

export const totalProductsSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    totalStore: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { totalStore } = totalProductsSlice.actions;

export default totalProductsSlice.reducer;
