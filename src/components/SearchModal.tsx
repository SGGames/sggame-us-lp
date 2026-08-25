import { useState, useEffect, useRef } from 'react';
import { Search, Gamepad2, Wrench, FileText, ArrowRight, X } from 'lucide-react';
import { GAMES_CATALOG } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigate(window.location.hash.replace('#', '') || 'home');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchedGames = GAMES_CATALOG.filter(g =>
    !normalizedQuery ||
    g.title.toLowerCase().includes(normalizedQuery) ||
    g.genre.toLowerCase().includes(normalizedQuery) ||
    g.description.toLowerCase().includes(normalizedQuery)
  );

  const matchedStore = STORE_ITEMS.filter(s =>
    !normalizedQuery ||
    s.title.toLowerCase().includes(normalizedQuery) ||
    s.tagline.toLowerCase().includes(normalizedQuery) ||
    s.description.toLowerCase().includes(normalizedQuery)
  );

  const staticPages = [
    { id: 'home', title: 'Home Page', category: 'Page', desc: 'Main hub, featured games, developer tooling' },
    { id: 'games', title: 'Games Catalog', category: 'Page', desc: 'All 15+ SGGame indie action, RPG, runner and arcade titles' },
    { id: 'store', title: 'Store & Developer Tools', category: 'Page', desc: 'VS Code extensions, Unity templates, open source SDKs' },
    { id: 'about', title: 'About SG Games', category: 'Page', desc: 'Studio story: Hanoi to Atlanta, team mission & milestones' },
    { id: 'contact', title: 'Contact & Inquiries', category: 'Page', desc: 'Business partnerships, publisher inquiries & support' },
    { id: 'privacy', title: 'Privacy Policies', category: 'Page', desc: 'Player data protection & application privacy terms' },
  ].filter(p => !normalizedQuery || p.title.toLowerCase().includes(normalizedQuery) || p.desc.toLowerCase().includes(normalizedQuery));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-base-200 border border-base-content/10 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-base-content/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-primary" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search games, tools, templates, documentation..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="input input-ghost w-full focus:bg-transparent focus:outline-none text-base"
          />
          <button onClick={onClose} className="btn btn-sm btn-ghost btn-circle">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto p-4 space-y-6">
          {/* Games */}
          {matchedGames.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold text-base-content/50 tracking-wider mb-2 flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 text-primary" />
                Games ({matchedGames.length})
              </h4>
              <div className="space-y-1.5">
                {matchedGames.map(game => (
                  <button
                    key={game.id}
                    onClick={() => {
                      onNavigate(`games/${game.id}`);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-base-300 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={game.coverImage} alt={game.title} className="w-10 h-10 rounded-lg object-cover bg-base-300" />
                      <div>
                        <div className="font-semibold text-sm text-base-content group-hover:text-primary transition-colors flex items-center gap-2">
                          {game.title}
                          <span className="badge badge-ghost badge-xs">{game.releaseYear}</span>
                        </div>
                        <p className="text-xs text-base-content/60 line-clamp-1">{game.subtitle}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-base-content/30 group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Store */}
          {matchedStore.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold text-base-content/50 tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-secondary" />
                Developer Tools & Store ({matchedStore.length})
              </h4>
              <div className="space-y-1.5">
                {matchedStore.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(`store/${item.id}`);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-base-300 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-mono font-bold text-xs">
                        {item.type.slice(0, 3).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-base-content group-hover:text-secondary transition-colors flex items-center gap-2">
                          {item.title}
                          <span className="badge badge-outline badge-xs">{item.price}</span>
                        </div>
                        <p className="text-xs text-base-content/60 line-clamp-1">{item.tagline}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-base-content/30 group-hover:text-secondary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pages */}
          {staticPages.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold text-base-content/50 tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-accent" />
                Pages ({staticPages.length})
              </h4>
              <div className="space-y-1.5">
                {staticPages.map(page => (
                  <button
                    key={page.id}
                    onClick={() => {
                      onNavigate(page.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-base-300 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-sm text-base-content group-hover:text-accent transition-colors">
                        {page.title}
                      </div>
                      <p className="text-xs text-base-content/60">{page.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-base-content/30 group-hover:text-accent transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedGames.length === 0 && matchedStore.length === 0 && staticPages.length === 0 && (
            <div className="text-center py-12 text-base-content/50">
              <p className="text-sm">No results found for "{query}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
