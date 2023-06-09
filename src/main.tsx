import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index.ts';

//TODO: Make sure to configure the store and then wrap the app in the provider to access it.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme()}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
