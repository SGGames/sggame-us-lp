import { useState, useEffect } from 'react';
import { Gamepad2, Wrench, Info, Mail, Shield, Search, Moon, Sun, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { GAMES_CATALOG } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';

export type PageId = 'home' | 'games' | 'store' | 'about' | 'contact' | 'privacy';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
}

export function Navbar({ currentPage, onNavigate, onOpenSearch }: NavbarProps) {
  const [theme, setTheme] = useState<'night' | 'synthwave' | 'light' | 'cyberpunk'>('night');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const nextTheme = theme === 'night' ? 'synthwave' : theme === 'synthwave' ? 'light' : theme === 'light' ? 'cyberpunk' : 'night';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks: { id: PageId; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'store', label: 'Store & Tools', icon: Wrench },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'glass-panel shadow-2xl py-2' : 'bg-base-100/80 backdrop-blur-md py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <span className="font-heading font-black text-xl text-white tracking-tighter">SG</span>
          </div>
          <div>
            <div className="font-heading font-bold text-lg leading-tight flex items-center gap-1 text-base-content">
              SG Games
              <span className="badge badge-primary badge-xs font-mono font-semibold">STUDIO</span>
            </div>
            <p className="text-xs text-base-content/60 font-medium">sggame.us</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = currentPage === link.id || (link.id === 'games' && currentPage.startsWith('games/')) || (link.id === 'store' && currentPage.startsWith('store/'));
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`btn btn-sm btn-ghost gap-2 rounded-lg font-medium transition-all ${
                  isActive ? 'btn-active text-primary font-bold shadow-sm' : 'text-base-content/80 hover:text-base-content'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </button>
            );
          })}

          {/* Quick Dropdown for Games */}
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm btn-ghost btn-circle text-base-content/60 hover:text-base-content">
              <ChevronDown className="w-4 h-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow-2xl bg-base-200/95 backdrop-blur-xl rounded-box w-64 border border-base-content/10">
              <li className="menu-title text-xs font-bold uppercase tracking-wider text-primary">Popular Games</li>
              {GAMES_CATALOG.slice(0, 5).map(g => (
                <li key={g.id}>
                  <button onClick={() => onNavigate(`games/${g.id}`)} className="text-xs flex items-center justify-between py-1.5">
                    <span>{g.title}</span>
                    <span className="badge badge-ghost badge-xs">{g.category}</span>
                  </button>
                </li>
              ))}
              <div className="divider my-1"></div>
              <li className="menu-title text-xs font-bold uppercase tracking-wider text-secondary">Dev Tools</li>
              {STORE_ITEMS.filter(i => i.type === 'tool').map(t => (
                <li key={t.id}>
                  <button onClick={() => onNavigate(`store/${t.id}`)} className="text-xs flex items-center justify-between py-1.5">
                    <span>{t.title}</span>
                    <span className="badge badge-outline badge-xs text-[10px]">VS Code</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="btn btn-sm btn-ghost gap-2 text-base-content/70 hover:text-base-content hidden sm:flex border border-base-content/10 rounded-lg px-3"
            title="Search games and tools"
          >
            <Search className="w-4 h-4" />
            <span className="text-xs">Search...</span>
            <kbd className="kbd kbd-xs bg-base-300">Ctrl K</kbd>
          </button>

          <button
            onClick={onOpenSearch}
            className="btn btn-sm btn-ghost btn-circle sm:hidden text-base-content/70"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Selector Toggle */}
          <button
            onClick={handleThemeToggle}
            className="btn btn-sm btn-ghost btn-circle text-base-content/70 hover:text-base-content"
            title={`Theme: ${theme}`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-warning" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-sm btn-ghost btn-circle md:hidden text-base-content"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-base-content/10 mt-2 px-4 py-4 space-y-2 animate-fadeIn">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors ${
                  isActive ? 'bg-primary text-primary-content font-bold' : 'hover:bg-base-200 text-base-content'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </button>
            );
          })}

          <div className="divider my-2"></div>

          <div className="px-4 py-1">
            <p className="text-xs uppercase font-bold text-base-content/40 tracking-wider mb-2">Legal & Privacy</p>
            <button
              onClick={() => {
                onNavigate('privacy');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs text-base-content/70 hover:text-primary py-1"
            >
              <Shield className="w-3.5 h-3.5" />
              Privacy Policies
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
