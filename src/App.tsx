import './App.css';

import { Box, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router';

import { Toaster } from '@/components/ui/toaster';

import { router } from './routes';

function App() {
  return (
    <Suspense
      fallback={
        <Box position="absolute" top="50%" left="50%">
          <Spinner size={'xl'} />
        </Box>
      }
    >
      <RouterProvider router={router} />
      <Toaster />
    </Suspense>
  );
}

export default App;
