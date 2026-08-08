import './App.css';

import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { router } from './routes';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
      <ToastContainer pauseOnHover={false} />
    </Suspense>
  );
}

export default App;
