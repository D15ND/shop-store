import RootLayout from '@/components/layout/RootLayout/RootLayout';
import ShopPage from '@/pages/ShopPage/ShopPage';

import { ROUTE_PATHS } from './routePaths';

export const appRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <p>HomePage</p> },
      { path: ROUTE_PATHS.SHOP, element: <ShopPage /> },
      { path: ROUTE_PATHS.ABOUT, element: <p>AboutPage</p> },
      { path: ROUTE_PATHS.NOT_FOUND, element: <p>Not found page</p> },
    ],
  },
];
