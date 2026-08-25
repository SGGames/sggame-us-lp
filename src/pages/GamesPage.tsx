import { useState } from 'react';
import { Gamepad2, Search, Filter, Star, ArrowRight, Smartphone, Monitor, Globe } from 'lucide-react';
import { GAMES_CATALOG, type GameItem } from '../data/gamesData';

interface GamesPageProps {
  onNavigate: (page: string) => void;
}

export function GamesPage({ onNavigate }: GamesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Titles' },
    { id: 'action', label: 'Action & FPS' },
    { id: 'rpg', label: 'RPG & Fantasy' },
    { id: 'runner', label: 'Runners & Platformers' },
    { id: 'arcade', label: 'Arcade & Racing' },
    { id: 'puzzle', label: 'Puzzles & Logic' },
    { id: 'board', label: 'Board & Casual' },
  ];

  const filteredGames = GAMES_CATALOG.filter(game => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesQuery = !searchQuery ||
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>SG Games Catalog</span>
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
          Our Games Portfolio
        </h1>
        <p className="text-base text-base-content/70 leading-relaxed">
          Explore over 15 original indie games created by SG Games. From fast-paced sci-fi FPS battles and Eastern myth RPGs to colorful family runners and tactical board games.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn btn-sm rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id ? 'btn-primary font-bold shadow-md shadow-primary/20' : 'btn-ghost text-base-content/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
          <input
            type="text"
            placeholder="Search by title, genre..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="input input-sm input-bordered w-full pl-9 rounded-xl focus:border-primary text-xs"
          />
        </div>
      </div>

      {/* Games Count Status */}
      <div className="flex items-center justify-between text-xs text-base-content/60 font-medium">
        <span>Showing {filteredGames.length} of {GAMES_CATALOG.length} games</span>
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="text-primary hover:underline">
            Clear search filter
          </button>
        )}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map(game => (
          <div
            key={game.id}
            onClick={() => onNavigate(`games/${game.id}`)}
            className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 bg-base-300 overflow-hidden">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 right-3 flex gap-1">
                  {game.badge && (
                    <span className="badge badge-primary badge-sm font-bold shadow">
                      {game.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="badge badge-neutral/90 backdrop-blur-md text-xs font-semibold text-white">
                    {game.genre}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/90 text-xs">
                    {game.platforms.includes('android') && (
                      <span title="Android"><Smartphone className="w-3.5 h-3.5" /></span>
                    )}
                    {game.platforms.includes('steam') && (
                      <span title="Steam / PC"><Monitor className="w-3.5 h-3.5" /></span>
                    )}
                    {game.platforms.includes('web') && (
                      <span title="Web"><Globe className="w-3.5 h-3.5" /></span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-base-content group-hover:text-primary transition-colors line-clamp-1">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1 text-warning text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-warning" />
                    <span>{game.rating || '4.6'}</span>
                  </div>
                </div>

                <p className="text-xs text-base-content/60 font-medium">{game.subtitle}</p>
                
                <p className="text-xs text-base-content/75 line-clamp-3 leading-relaxed pt-1">
                  {game.description}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-base-content/5 mt-3 text-xs text-base-content/60">
              <span className="font-mono">{game.releaseYear} • {game.playersCount || '1M+ Plays'}</span>
              <span className="font-semibold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                View Game <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-20 bg-base-200/50 rounded-2xl border border-base-content/5">
          <Gamepad2 className="w-12 h-12 mx-auto text-base-content/20 mb-3" />
          <h3 className="font-heading font-bold text-lg text-base-content">No games matched your filter</h3>
          <p className="text-xs text-base-content/60 mt-1">Try resetting the category filter or searching for another title.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="btn btn-sm btn-primary rounded-xl mt-4 text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
