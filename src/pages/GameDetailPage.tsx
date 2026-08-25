import { useState } from 'react';
import { ArrowLeft, Star, Download, ExternalLink, Shield, CheckCircle2, Globe, Smartphone, Monitor, Share2, Sparkles, Flame, Play } from 'lucide-react';
import { GAMES_CATALOG, type GameItem } from '../data/gamesData';

interface GameDetailPageProps {
  gameId: string;
  onNavigate: (page: string) => void;
}

export function GameDetailPage({ gameId, onNavigate }: GameDetailPageProps) {
  const game = GAMES_CATALOG.find(g => g.id === gameId) || GAMES_CATALOG[0];
  const [activeImage, setActiveImage] = useState<string>(game.coverImage);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('games')}
          className="btn btn-sm btn-ghost gap-2 rounded-xl text-xs font-semibold hover:bg-base-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Games Catalog
        </button>

        <button
          onClick={handleShare}
          className="btn btn-sm btn-outline gap-1.5 rounded-xl text-xs font-semibold"
        >
          <Share2 className="w-3.5 h-3.5" />
          {copied ? 'Link Copied!' : 'Share'}
        </button>
      </div>

      {/* Main Game Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Gallery / Main Character Showcase */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl overflow-hidden border border-base-content/15 shadow-2xl bg-base-300 relative h-80 sm:h-[450px]">
            <img
              src={activeImage}
              alt={game.title}
              className="w-full h-full object-cover object-center"
            />
            {game.badge && (
              <span className="badge badge-primary font-bold absolute top-4 right-4 shadow-lg text-xs py-3 px-3">
                {game.badge}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {game.screenshots.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {game.screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(src)}
                  className={`relative w-28 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 bg-base-300 ${
                    activeImage === src ? 'border-primary scale-95 shadow-md shadow-primary/30 ring-2 ring-primary/40' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt={`${game.title} preview ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="badge badge-outline text-xs font-semibold">{game.genre}</span>
              <span className="badge badge-ghost text-xs font-mono">{game.releaseYear}</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-base-content leading-tight">
              {game.title}
            </h1>
            <p className="text-sm font-semibold text-primary">{game.subtitle}</p>
          </div>

          {/* Rating & Stats */}
          <div className="flex items-center gap-6 py-4 border-y border-base-content/10">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-warning/10 text-warning flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-warning" />
              </div>
              <div>
                <div className="font-bold text-sm text-base-content">{game.rating || 4.6} / 5.0</div>
                <div className="text-[11px] text-base-content/50">Player Rating</div>
              </div>
            </div>

            <div className="divider divider-horizontal my-0"></div>

            <div>
              <div className="font-bold text-sm text-base-content font-mono">{game.playersCount || '1M+ Plays'}</div>
              <div className="text-[11px] text-base-content/50">Community Reach</div>
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-base-content/80 leading-relaxed">
            {game.description}
          </p>

          {/* Download & Play Actions */}
          <div className="space-y-3 pt-2">
            {game.googlePlayUrl && (
              <a
                href={game.googlePlayUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg w-full rounded-2xl font-bold gap-2 shadow-lg shadow-primary/20 text-sm"
              >
                <Smartphone className="w-5 h-5" />
                Find on Google Play Store
                <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
              </a>
            )}

            {/* Privacy Policy Link */}
            <button
              onClick={() => onNavigate(game.privacyPolicySlug === 'snakesaga' ? 'privacy/snakesaga' : game.privacyPolicySlug === 'fairytalerunner' ? 'privacy/fairytalerunner' : game.privacyPolicySlug === 'witchmaze' ? 'privacy/witchmaze' : 'privacy')}
              className="btn btn-ghost btn-sm w-full rounded-xl text-xs text-base-content/60 hover:text-base-content gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-success" />
              View Game Privacy Policy & Data Terms
            </button>
          </div>
        </div>
      </div>

      {/* Game Features & Long Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-base-content/10">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-heading font-bold text-2xl text-base-content flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Gameplay Overview
          </h2>
          <p className="text-sm text-base-content/85 leading-relaxed">
            {game.longDescription}
          </p>

          <h3 className="font-heading font-bold text-xl text-base-content pt-4">
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {game.features.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-base-200/60 border border-base-content/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs text-base-content/85 leading-relaxed font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel rounded-3xl p-6 border border-base-content/10 space-y-4 shadow-xl">
            <h3 className="font-heading font-bold text-base text-base-content">
              Specifications
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-base-content/5">
                <span className="text-base-content/50">Category</span>
                <span className="font-semibold text-base-content capitalize">{game.category}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-base-content/5">
                <span className="text-base-content/50">Release Year</span>
                <span className="font-mono text-base-content">{game.releaseYear}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-base-content/5">
                <span className="text-base-content/50">Developer</span>
                <span className="font-semibold text-base-content">SG Games Studio</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-base-content/5">
                <span className="text-base-content/50">Supported Platforms</span>
                <span className="font-semibold text-base-content uppercase">{game.platforms.join(', ')}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-base-content/50">Age Rating</span>
                <span className="badge badge-ghost badge-xs">Everyone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
