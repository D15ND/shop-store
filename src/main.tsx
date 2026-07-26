import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { UIProvider } from '@/components/ui/provider';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
);
