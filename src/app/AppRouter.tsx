import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { StorefrontLayout } from '../shared/layout/StorefrontLayout';
import { AdminLayout } from '../shared/layout/AdminLayout';
import { HomePage } from '../features/pages/home/HomePage';
import { CollectionPage } from '../features/pages/collection/CollectionPage';
import { ContactPage } from '../features/pages/contact/ContactPage';
import { AboutPage } from '../features/pages/about/AboutPage';
import { FAQPage } from '../features/pages/faq/FAQPage';
import { TermsPage } from '../features/pages/legal/TermsPage';
import { PrivacyPage } from '../features/pages/legal/PrivacyPage';
import { DashboardPage } from '../features/admin/pages/DashboardPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StorefrontLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/termos" element={<TermsPage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<div>Gerenciamento de Produtos</div>} />
          <Route path="orders" element={<div>Gerenciamento de Vendas</div>} />
          <Route path="stock" element={<div>Gerenciamento de Estoque</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
