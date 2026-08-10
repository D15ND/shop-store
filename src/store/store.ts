import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartCount';
import paginationReducer from './pagination';
import totalReducer from './totalProducts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pagination: paginationReducer,
    total: totalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
