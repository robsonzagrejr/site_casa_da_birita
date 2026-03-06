import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './app/AppRouter';
import { ThemeModeProvider } from './theme/ThemeModeProvider';
import { CartProvider } from './shared/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);
