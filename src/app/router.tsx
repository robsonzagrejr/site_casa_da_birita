import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { StorefrontLayout } from '../shared/layout/StorefrontLayout';
import { AdminLayout } from '../shared/layout/AdminLayout';
import { HomePage } from '../features/catalog/pages/HomePage';
import { ProductPage } from '../features/catalog/pages/ProductPage';
import { CollectionPage } from '../features/catalog/pages/CollectionPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StorefrontLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<div>Admin dashboard</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

