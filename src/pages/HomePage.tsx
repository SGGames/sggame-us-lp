import { useState } from 'react';
import { Gamepad2, Wrench, Sparkles, ArrowRight, Download, ExternalLink, Shield, Globe, Star, Play, Code, Flame, ChevronRight, Zap } from 'lucide-react';
import { GAMES_CATALOG, type GameItem } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';
import { COMPANY_INFO } from '../data/companyData';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroCharacters = [
    {
      id: 'monkeyking',
      name: 'Sun Wukong',
      gameTitle: 'Monkey King: Journey to the West',
      genre: 'Action RPG / Fantasy',
      badge: 'Mythic RPG',
      image: '/assets/images/characters/monkey_king_hero.jpg',
      quote: 'Master the 72 transformations and summon primordial celestial staff combos.',
      rating: 4.8,
      players: '5M+ Downloads'
    },
    {
      id: 'botz',
      name: 'V-01 Unit',
      gameTitle: 'BotZ: Abandoned Dream',
      genre: 'Cyberpunk FPS / Action',
      badge: 'Sci-Fi FPS',
      image: '/assets/images/characters/botz_hero.jpg',
      quote: 'Tactical survival combat against rogue android legions in neo-dystopian ruins.',
      rating: 4.6,
      players: '2M+ Players'
    },
    {
      id: 'ninjadash',
      name: 'Hayate',
      gameTitle: 'Ninja Dash',
      genre: 'Action Runner / Platformer',
      badge: 'Arcade Hit',
      image: '/assets/images/characters/ninja_dash_hero.jpg',
      quote: 'Lightning-fast rooftop dashes with dual katana blade slashes under the full moon.',
      rating: 4.6,
      players: '3M+ Downloads'
    },
    {
      id: 'hellwatch',
      name: 'Seraphina',
      gameTitle: 'Hell Watch: Armageddon',
      genre: 'Demon Defense / Shooter',
      badge: 'Classic Defense',
      image: '/assets/images/characters/hellwatch_hero.jpg',
      quote: 'Defend humanity’s holy stronghold against cataclysmic underworld legions.',
      rating: 4.5,
      players: '1M+ Players'
    },
    {
      id: 'fairytalerunner',
      name: 'Luna',
      gameTitle: 'Forest Fairy Runner',
      genre: '3D Endless Runner',
      badge: 'Family Favorite',
      image: '/assets/images/characters/fairytale_runner_hero.jpg',
      quote: 'Fly through enchanting enchanted forests with glowing wings and cute companion pets.',
      rating: 4.7,
      players: '2M+ Downloads'
    },
    {
      id: 'snakesaga',
      name: 'Cyberserpent',
      gameTitle: 'Snake Saga',
      genre: 'Cyber IO Battle Royale',
      badge: 'Hot 2022',
      image: '/assets/images/characters/snake_saga_hero.jpg',
      quote: 'High-speed neon snake battle arena with electrifying powerups and dynamic trails.',
      rating: 4.7,
      players: '10M+ Downloads'
    }
  ];

  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);
  const activeChar = heroCharacters[selectedHeroIndex];

  const featuredGames = GAMES_CATALOG.filter(g => g.featured);
  const featuredTools = STORE_ITEMS.filter(s => s.featured);

  return (
    <div className="space-y-28">
      {/* Immersive Panoramic Studio Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
        {/* Background Image with Dynamic Gradient Fades */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={activeChar.image}
            alt={activeChar.name}
            className="w-full h-full object-cover object-center filter brightness-40 blur-[2px] scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/75 to-base-100/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/60 to-transparent" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-primary/25 rounded-full blur-3xl -z-10 animate-glow pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-secondary/20 rounded-full blur-3xl -z-10 animate-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
            
            {/* Left Col: Main Studio Brand & Selected Hero Spotlight */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wide backdrop-blur-md">
                <Flame className="w-4 h-4 text-warning animate-pulse" />
                <span>100M+ GLOBAL GAME PLAYS • HANOI TO ATLANTA</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05]">
                  UNLEASH <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    THE LEGENDS
                  </span>
                </h1>

                <p className="text-base sm:text-xl text-white/85 max-w-xl font-medium leading-relaxed">
                  Step into legendary mythic RPGs, high-tech tactical sci-fi shooters, and professional game creator tools crafted by SG Games.
                </p>
              </div>

              {/* Active Character Spotlight Callout */}
              <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 max-w-xl space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="badge badge-primary font-bold text-xs">{activeChar.badge}</span>
                    <span className="font-heading font-bold text-base sm:text-lg text-white">{activeChar.gameTitle}</span>
                  </div>
                  <div className="flex items-center gap-1 text-warning text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-warning" />
                    <span>{activeChar.rating}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/75 italic">
                  "{activeChar.quote}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate(`games/${activeChar.id}`)}
                  className="btn btn-primary btn-lg shadow-xl shadow-primary/30 rounded-2xl gap-2 font-bold px-8"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Play & Explore Game
                </button>

                <button
                  onClick={() => onNavigate('games')}
                  className="btn btn-outline btn-lg border-white/25 text-white hover:bg-white/10 rounded-2xl gap-2 font-bold px-6"
                >
                  <Gamepad2 className="w-5 h-5" />
                  All 15+ Games
                </button>

                <a
                  href="https://github.com/sggames"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-lg text-white/80 hover:text-primary gap-2 rounded-2xl text-xs font-bold"
                >
                  <Code className="w-4 h-4 text-primary" />
                  GitHub OpenSource
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Large Hero Stage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group aspect-[4/3] sm:aspect-[16/10] lg:aspect-square bg-base-300">
                <img
                  src={activeChar.image}
                  alt={activeChar.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="badge badge-accent font-bold text-xs">{activeChar.name}</span>
                    <span className="font-mono text-xs text-white/80">{activeChar.players}</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {activeChar.gameTitle}
                  </h3>
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => onNavigate(`games/${activeChar.id}`)}
                      className="btn btn-sm btn-primary rounded-xl font-bold gap-1 text-xs"
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Character Selector Thumbnails */}
              <div className="flex items-center justify-center gap-2.5 mt-4 overflow-x-auto py-2">
                {heroCharacters.map((char, index) => (
                  <button
                    key={char.id}
                    onClick={() => setSelectedHeroIndex(index)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      selectedHeroIndex === index
                        ? 'border-primary scale-110 shadow-lg shadow-primary/40 ring-2 ring-primary/30'
                        : 'border-white/20 opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    title={char.name}
                  >
                    <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Studio Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10">
            {COMPANY_INFO.stats.map(stat => (
              <div key={stat.label} className="p-4 rounded-2xl bg-base-200/60 border border-white/5 backdrop-blur-md text-center">
                <div className="font-heading font-black text-3xl text-primary">{stat.value}</div>
                <div className="text-xs text-base-content/70 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-2">
              <Gamepad2 className="w-4 h-4" />
              <span>Full Indie Catalog</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
              Featured Game Titles
            </h2>
          </div>
          <button
            onClick={() => onNavigate('games')}
            className="btn btn-primary btn-sm gap-2 self-start md:self-auto rounded-xl text-xs font-bold"
          >
            Browse All 15+ Games
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map(game => (
            <div
              key={game.id}
              onClick={() => onNavigate(`games/${game.id}`)}
              className="glass-card rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between border border-base-content/10 shadow-xl"
            >
              <div>
                <div className="relative h-64 bg-base-300 overflow-hidden">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex gap-1">
                    {game.badge && (
                      <span className="badge badge-primary font-bold shadow-lg">
                        {game.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="badge badge-neutral/90 backdrop-blur-md text-xs font-semibold text-white">
                      {game.genre}
                    </span>
                    <div className="flex items-center gap-1 text-warning text-xs font-bold bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-lg">
                      <Star className="w-3 h-3 fill-warning" />
                      <span>{game.rating || '4.6'}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="font-heading font-bold text-xl text-base-content group-hover:text-primary transition-colors line-clamp-1">
                    {game.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary/80 line-clamp-1">{game.subtitle}</p>
                  <p className="text-xs text-base-content/75 line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-base-content/5 mt-2 text-xs text-base-content/60">
                <span className="font-mono">{game.releaseYear} • {game.playersCount || '1M+ Plays'}</span>
                <span className="font-bold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Game <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Tooling & SGG-SpriteEditor Spotlight */}
      <section className="bg-base-200/50 py-20 border-y border-base-content/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest">
              <Wrench className="w-4 h-4" />
              <span>Professional Game Dev Tooling</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
              Tools, Unity Templates & SDKs
            </h2>
            <p className="text-base text-base-content/70">
              Built by game engineers to streamline 2D sprite workflows, cross-platform monetization, and production game architectures.
            </p>
          </div>

          {/* SGG-SpriteEditor Showcase Banner */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-secondary/30 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge badge-secondary font-bold text-xs">VS Code Extension</span>
                  <span className="badge badge-outline text-xs font-mono">*.atlas.json • *.plist • LibGDX</span>
                  <span className="badge badge-success text-xs font-bold">100% Free</span>
                </div>

                <h3 className="font-heading font-black text-3xl sm:text-4xl text-base-content">
                  SGG-SpriteEditor for Visual Studio Code
                </h3>

                <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
                  Open any atlas file, see your sprites on a live canvas, manipulate frames visually, remove chroma keys/greenscreens, and export in the format your engine expects — without leaving your editor.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-base-content/85">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-base-300/60 border border-base-content/5">
                    <Zap className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Live Canvas & Frame Transform</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-base-300/60 border border-base-content/5">
                    <Zap className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Batch Image Converter (WebP/PNG)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-base-300/60 border border-base-content/5">
                    <Zap className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Greenscreen Chroma Key Removal</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-base-300/60 border border-base-content/5">
                    <Zap className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>Multi-Format Export (JSON/Plist/Atlas)</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=sggames.sggspriteeditor"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-md rounded-xl font-bold gap-2 text-xs shadow-lg shadow-secondary/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Install from VS Code Marketplace
                  </a>

                  <button
                    onClick={() => onNavigate('store/spriteeditor')}
                    className="btn btn-outline rounded-xl text-xs font-bold"
                  >
                    View Full Feature Specs
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl bg-base-300">
                  <img
                    src="/assets/images/img_56981251.png"
                    alt="SGG-SpriteEditor Visual Studio Code Extension"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Open Source Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-base-300 via-base-200 to-base-300 border border-primary/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                <Code className="w-4 h-4" />
                <span>GitHub Open Source Organization</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-base-content">
                Explore @sggames on GitHub
              </h3>
              <p className="text-xs sm:text-sm text-base-content/70 max-w-xl">
                Access full source code for <strong>AtomGameFramework</strong>, <strong>SGGameSDK-Unity</strong>, game templates, and open development tools.
              </p>
            </div>

            <a
              href="https://github.com/sggames"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary rounded-2xl gap-2 font-bold px-6 shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              <ExternalLink className="w-4 h-4" />
              Visit github.com/sggames
            </a>
          </div>
        </div>
      </section>

      {/* Studio Mission & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest">
              <Globe className="w-4 h-4" />
              <span>Studio Journey</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
              From Hanoi Roots to Atlanta HQ
            </h2>

            <p className="text-base text-base-content/75 leading-relaxed">
              Founded in 2015 in Hanoi, Vietnam, SG Games began with a mission to build accessible, player-first gaming worlds. We expanded our creative storytelling in Los Angeles, and in 2020 established our global headquarters in <strong>Atlanta, Georgia</strong>.
            </p>

            <div className="space-y-3">
              {COMPANY_INFO.pillars.map((pillar) => (
                <div key={pillar.title} className="p-4 rounded-2xl bg-base-200/60 border border-base-content/5 space-y-1">
                  <h4 className="font-heading font-bold text-sm text-base-content">{pillar.title}</h4>
                  <p className="text-xs text-base-content/65">{pillar.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="btn btn-outline rounded-xl text-xs font-bold gap-2"
            >
              Read Our Full Studio Story <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden border border-base-content/10 shadow-xl bg-base-300">
              <img src="/assets/images/img_55478654.jpg" alt="SG Games Studio Team" className="w-full h-56 sm:h-72 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden border border-base-content/10 shadow-xl bg-base-300 mt-10">
              <img src="/assets/images/img_62703490.jpg" alt="SG Games Studio Office" className="w-full h-56 sm:h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
