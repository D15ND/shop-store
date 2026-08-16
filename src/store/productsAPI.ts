import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { limitProducts } from '@/data/constants';
import type { ErrorResponse, ProductsResponse } from '@/types/Cards';

export const productsAPI = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProducts: build.query<ProductsResponse, number>({
      query: (page) => `products?limit=${limitProducts}&skip=${limitProducts * page}`,
      transformErrorResponse: (response: ErrorResponse) => ({
        status: response.status,
        message: response.data.message,
      }),
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetProductsQuery } = productsAPI;
