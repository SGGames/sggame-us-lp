import { useState } from 'react';
import { Wrench, Code, Layers, Sparkles, ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import { STORE_ITEMS, type StoreItem } from '../data/storeData';

interface StorePageProps {
  onNavigate: (page: string) => void;
}

export function StorePage({ onNavigate }: StorePageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'tool' | 'template' | 'opensource'>('all');

  const filteredItems = STORE_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
          <Wrench className="w-3.5 h-3.5" />
          <span>SG Developer Hub & Store</span>
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
          Tools, Game Templates & Open Source
        </h1>
        <p className="text-base text-base-content/70 leading-relaxed">
          Accelerate your game development with battle-tested VS Code extensions, ready-to-publish Unity starter kits, and open-source modular architectures.
        </p>
      </div>

      {/* Tabs Filter */}
      <div className="flex items-center gap-2 border-b border-base-content/10 pb-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab('all')}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'all' ? 'btn-secondary text-secondary-content shadow-md shadow-secondary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          All Resources ({STORE_ITEMS.length})
        </button>

        <button
          onClick={() => setActiveTab('tool')}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'tool' ? 'btn-secondary text-secondary-content shadow-md shadow-secondary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" />
          VS Code & Pipeline Tools ({STORE_ITEMS.filter(i => i.type === 'tool').length})
        </button>

        <button
          onClick={() => setActiveTab('template')}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'template' ? 'btn-secondary text-secondary-content shadow-md shadow-secondary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          Unity Game Templates ({STORE_ITEMS.filter(i => i.type === 'template').length})
        </button>

        <button
          onClick={() => setActiveTab('opensource')}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'opensource' ? 'btn-secondary text-secondary-content shadow-md shadow-secondary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          Open Source Libraries ({STORE_ITEMS.filter(i => i.type === 'opensource').length})
        </button>
      </div>

      {/* Store Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => onNavigate(`store/${item.id}`)}
            className="glass-card rounded-2xl p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge badge-secondary/15 text-secondary border-none text-xs font-bold">
                  {item.badge || item.category}
                </span>
                <span className="badge badge-ghost badge-sm font-mono text-xs">
                  {item.price}
                </span>
              </div>

              {item.coverImage && item.screenshots.length > 0 && (
                <div className="h-40 rounded-xl overflow-hidden bg-base-300 border border-base-content/5">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-xl text-base-content group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-secondary/80 line-clamp-1">
                  {item.tagline}
                </p>
                <p className="text-xs text-base-content/70 line-clamp-3 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-base-content/5 mt-4 flex items-center justify-between text-xs">
              <span className="text-base-content/50 font-mono">{item.engine}</span>
              <span className="font-semibold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Documentation & Download <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
