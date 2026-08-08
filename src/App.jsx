import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { QuickViewModal } from './components/common/QuickViewModal';
import { CartDrawer } from './components/common/CartDrawer';
import { SearchModal } from './components/common/SearchModal';
import { MobileMenu } from './components/common/MobileMenu';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { JournalPage } from './pages/JournalPage';

const MainContent = () => {
  const { activePage } = useShop();

  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Header />
      <div className="flex-grow">
        {activePage === 'home' && <HomePage />}
        {activePage === 'catalog' && <CatalogPage />}
        {activePage === 'detail' && <ProductDetailPage />}
        {activePage === 'journal' && <JournalPage />}
      </div>
      <Footer />

      {/* Global Modals & Drawers */}
      <QuickViewModal />
      <CartDrawer />
      <SearchModal />
      <MobileMenu />
    </div>
  );
};

export function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}

export default App;
