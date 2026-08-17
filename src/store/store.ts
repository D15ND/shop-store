import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartCount';
import paginationReducer from './pagination';
import { productsAPI } from './productsAPI';
import sortSelectReducer from './sortSelect';
import totalReducer from './totalProducts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pagination: paginationReducer,
    total: totalReducer,
    select: sortSelectReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
