import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { StorefrontLayout } from '../shared/layout/StorefrontLayout';
import { AdminLayout } from '../shared/layout/AdminLayout';
import { HomePage } from '../features/pages/home/HomePage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StorefrontLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<div>Admin dashboard</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
