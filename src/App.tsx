import './App.css';

import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router';

import { router } from './routes';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
