import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type SortSelect = {
  sortValue: string;
};

const initialState: SortSelect = {
  sortValue: '',
};

export const sortSelectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setSelect: (state, action: PayloadAction<string>) => {
      state.sortValue = action.payload;
    },
  },
});

export const { setSelect } = sortSelectSlice.actions;

export default sortSelectSlice.reducer;
