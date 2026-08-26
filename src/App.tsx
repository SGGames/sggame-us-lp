import { useState, useEffect } from 'react';
import { Navbar, type PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { GameDetailPage } from './pages/GameDetailPage';
import { StorePage } from './pages/StorePage';
import { StoreItemDetailPage } from './pages/StoreItemDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
      setCurrentRoute(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: string) => {
    const cleanRoute = route.replace(/^#\/?/, '') || 'home';
    setCurrentRoute(cleanRoute);
    window.location.hash = cleanRoute;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Resolver
  const renderCurrentPage = () => {
    if (currentRoute === 'home' || currentRoute === '') {
      return <HomePage onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'games') {
      return <GamesPage onNavigate={handleNavigate} />;
    }
    if (currentRoute.startsWith('games/')) {
      const gameId = currentRoute.replace('games/', '');
      return <GameDetailPage key={gameId} gameId={gameId} onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'store') {
      return <StorePage onNavigate={handleNavigate} />;
    }
    if (currentRoute.startsWith('store/')) {
      const itemId = currentRoute.replace('store/', '');
      return <StoreItemDetailPage itemId={itemId} onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'contact') {
      return <ContactPage />;
    }
    if (currentRoute === 'privacy' || currentRoute.startsWith('privacy/')) {
      const slug = currentRoute.startsWith('privacy/') ? currentRoute.replace('privacy/', '') : 'default';
      return <PrivacyPolicyPage policySlug={slug} onNavigate={handleNavigate} />;
    }

    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content antialiased">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
