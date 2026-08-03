import { lazy } from 'react';

import RootLayout from '@/components/layout/RootLayout/RootLayout';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import { ROUTE_PATHS } from './routePaths';

const CartPage = lazy(() => import('@/pages/CartPage/CartPage'));
const ShopPage = lazy(() => import('@/pages/ShopPage/ShopPage'));

export const appRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <p>HomePage</p> },
      { path: ROUTE_PATHS.SHOP, element: <ShopPage /> },
      { path: ROUTE_PATHS.ABOUT, element: <p>AboutPage</p> },
      { path: ROUTE_PATHS.CART, element: <CartPage /> },
      { path: ROUTE_PATHS.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
];
