import { useState, useEffect } from 'react';
import { Gamepad2, Wrench, Info, Mail, Shield, Search, Moon, Sun, Menu, X, ChevronDown, Sparkles, Code, Network, Globe } from 'lucide-react';
import { GAMES_CATALOG } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';
import { ECOSYSTEM_LINKS } from '../data/companyData';

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

          {/* Quick Ecosystem & Games Dropdown */}
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm btn-ghost gap-1 text-base-content/70 hover:text-base-content">
              <Network className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs font-semibold">Ecosystem</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-50 menu p-3 shadow-2xl bg-base-200/95 backdrop-blur-xl rounded-2xl w-72 border border-base-content/10 space-y-1">
              <li className="menu-title text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1">
                <Network className="w-3.5 h-3.5" /> SG Studio Ecosystem
              </li>
              {ECOSYSTEM_LINKS.map(eco => (
                <li key={eco.domain}>
                  <a href={eco.url} target="_blank" rel="noreferrer" className="flex items-center justify-between py-2 rounded-xl text-xs">
                    <div>
                      <div className="font-bold text-base-content">{eco.name}</div>
                      <div className="text-[10px] text-base-content/50 font-mono">{eco.domain}</div>
                    </div>
                    <span className="badge badge-ghost badge-xs text-[10px]">{eco.badge}</span>
                  </a>
                </li>
              ))}

              <div className="divider my-1"></div>

              <li className="menu-title text-xs font-bold uppercase tracking-wider text-primary">Popular Games</li>
              {GAMES_CATALOG.slice(0, 4).map(g => (
                <li key={g.id}>
                  <button onClick={() => onNavigate(`games/${g.id}`)} className="text-xs flex items-center justify-between py-1.5">
                    <span>{g.title}</span>
                    <span className="badge badge-ghost badge-xs">{g.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* GitHub Repo Button */}
          <a
            href="https://github.com/SGGames/sggame-us-lp"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-ghost border border-base-content/15 rounded-xl gap-1.5 text-xs font-bold text-base-content/85 hover:text-primary hover:border-primary hidden sm:flex"
            title="GitHub Repository @SGGames/sggame-us-lp"
          >
            <Code className="w-3.5 h-3.5 text-primary" />
            <span>GitHub</span>
            <span className="badge badge-primary badge-xs text-[10px]">OSS</span>
          </a>

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

          <p className="text-xs uppercase font-bold text-base-content/40 tracking-wider px-4 mb-1">Our Ecosystem</p>
          <div className="grid grid-cols-2 gap-2 px-4 py-1">
            {ECOSYSTEM_LINKS.map(eco => (
              <a
                key={eco.domain}
                href={eco.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-base-200 hover:bg-base-300 text-xs flex flex-col"
              >
                <span className="font-bold text-base-content">{eco.name}</span>
                <span className="text-[10px] text-primary">{eco.domain}</span>
              </a>
            ))}
          </div>

          <div className="divider my-2"></div>

          <a
            href="https://github.com/SGGames/sggame-us-lp"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-base-200"
          >
            <Code className="w-4 h-4" />
            GitHub Repo (SGGames/sggame-us-lp)
          </a>

          <div className="px-4 py-1">
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
