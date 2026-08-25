import { useState } from 'react';
import { Gamepad2, Wrench, Sparkles, ArrowRight, Download, ExternalLink, Shield, Globe, Star, Play, Code, Flame, ChevronRight, Zap, Network, Layers, Monitor, ChevronDown } from 'lucide-react';
import { GAMES_CATALOG } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';
import { COMPANY_INFO, ECOSYSTEM_LINKS } from '../data/companyData';
import { SciFiMatrixCounter } from '../components/SciFiMatrixCounter';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const characters = [
    {
      id: 'monkeyking',
      name: 'Sun Wukong',
      title: 'Monkey King: Journey to the West',
      genre: 'Action RPG',
      badge: 'Mythic',
      image: '/assets/images/characters/monkey_king_hero.jpg'
    },
    {
      id: 'botz',
      name: 'V-01 Cyborg',
      title: 'BotZ: Abandoned Dream',
      genre: 'Cyberpunk FPS',
      badge: 'Sci-Fi',
      image: '/assets/images/characters/botz_hero.jpg'
    },
    {
      id: 'ninjadash',
      name: 'Hayate Ninja',
      title: 'Ninja Dash',
      genre: 'Action Runner',
      badge: 'Arcade',
      image: '/assets/images/characters/ninja_dash_hero.jpg'
    },
    {
      id: 'hellwatch',
      name: 'Seraphina',
      title: 'Hell Watch: Armageddon',
      genre: 'Tower Defense',
      badge: 'Defense',
      image: '/assets/images/characters/hellwatch_hero.jpg'
    },
    {
      id: 'fairytalerunner',
      name: 'Luna Fairy',
      title: 'Forest Fairy Runner',
      genre: '3D Endless Runner',
      badge: 'Family',
      image: '/assets/images/characters/fairytale_runner_hero.jpg'
    },
    {
      id: 'snakesaga',
      name: 'Cyber Snake',
      title: 'Snake Saga',
      genre: 'Cyber IO Arena',
      badge: 'Battle IO',
      image: '/assets/images/characters/snake_saga_hero.jpg'
    },
    {
      id: 'witchmaze',
      name: 'Apprentice Witch',
      title: 'Witch Maze: Magic Puzzles',
      genre: 'Puzzle Adventure',
      badge: 'Logic',
      image: '/assets/images/characters/witch_maze_hero.jpg'
    }
  ];

  const featuredGames = GAMES_CATALOG.filter(g => g.featured);

  return (
    <div className="space-y-28">
      {/* FULL-WIDTH Cinematic Studio Universe Hero Showcase */}
      <section className="relative w-full pt-4 pb-12 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* 1. Studio Header & Primary CTAs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-200/80 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider backdrop-blur-xl shadow-lg">
            <Flame className="w-4 h-4 text-warning animate-pulse" />
            <span>100M+ GLOBAL GAME PLAYS • HANOI TO ATLANTA</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase">
            UNLEASH{' '}
            <span className="bg-gradient-to-r from-amber-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              THE LEGENDS
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-base-content/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Where Eastern mythic RPGs, tactical cyberpunk sci-fi, shadow shinobi, and enchanted worlds unite under <strong>SG Games Studio</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onNavigate('games')}
              className="btn btn-primary btn-md sm:btn-lg shadow-xl shadow-primary/30 rounded-2xl gap-2 font-bold px-7 text-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              Explore All 15+ Games
            </button>

            <button
              onClick={() => onNavigate('store')}
              className="btn btn-secondary btn-md sm:btn-lg shadow-xl shadow-secondary/25 rounded-2xl gap-2 font-bold px-7 text-sm"
            >
              <Wrench className="w-4 h-4" />
              Developer Tools & Store
            </button>

            <a
              href="https://github.com/SGGames/sggame-us-lp"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-md sm:btn-lg bg-base-200/70 hover:bg-base-200 text-base-content gap-2 rounded-2xl text-xs font-bold border border-base-content/10"
            >
              <Code className="w-4 h-4 text-primary" />
              GitHub Repo
            </a>
          </div>
        </div>

        {/* 2. Full-Width Panoramic Cinematic Stage (Unobstructed, 100% visible epic art) */}
        <div className="w-full max-w-[1550px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-500/30 bg-black group aspect-[16/9] sm:aspect-[21/10] lg:aspect-[16/8]">
            <img
              src="/assets/images/heroes/sggame_universe_hero.jpg"
              alt="SG Games Studio Universe - Unleash The Legends"
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-102 transition-transform duration-700 filter brightness-100 contrast-105"
            />

            {/* Subtle cinematic edge gradient only at the very bottom */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Floating Top-Right Live Badge */}
            <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-xs text-white/90 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>OFFICIAL KEY VISUAL</span>
            </div>
          </div>
        </div>

        {/* 3. Interactive Character Quick-Dock */}
        <div className="w-full max-w-[1550px] mx-auto px-2 sm:px-4 lg:px-6 mt-4">
          <div className="p-3 sm:p-4 rounded-2xl bg-base-200/80 border border-base-content/10 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-warning" /> SG Studio Universe Characters
              </span>
              <button onClick={() => onNavigate('games')} className="text-xs text-primary hover:underline flex items-center gap-1 font-semibold">
                Browse Full Catalog <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {characters.map(char => (
                <button
                  key={char.id}
                  onClick={() => onNavigate(`games/${char.id}`)}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-base-300/60 hover:bg-primary/20 border border-base-content/5 hover:border-primary/50 transition-all text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-base-content/10 group-hover:scale-105 transition-transform bg-base-300">
                    <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-base-content group-hover:text-primary transition-colors truncate">
                      {char.name}
                    </div>
                    <div className="text-[10px] text-base-content/60 truncate font-mono">
                      {char.genre}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sci-Fi Matrix Animated Telemetry Counter with Pixel VFX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SciFiMatrixCounter stats={COMPANY_INFO.stats} />
      </section>

      {/* Featured Games Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-2">
              <Gamepad2 className="w-4 h-4" />
              <span>Game Catalog</span>
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

      {/* SG Gaming Ecosystem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest">
            <Network className="w-4 h-4" />
            <span>Connected Studios & Brands</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
            Our Global Ecosystem
          </h2>
          <p className="text-base text-base-content/70">
            Explore our interconnected family of gaming studios, international operations, casual portals, and education networks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOSYSTEM_LINKS.map(eco => (
            <a
              key={eco.domain}
              href={eco.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-base-200/60 hover:bg-base-200 border border-base-content/10 hover:border-primary/50 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`badge badge-sm font-bold bg-gradient-to-r ${eco.color} border`}>
                    {eco.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 text-base-content/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-base-content group-hover:text-primary transition-colors">
                    {eco.name}
                  </h3>
                  <p className="text-xs font-mono text-primary font-medium">{eco.domain}</p>
                </div>

                <p className="text-xs text-base-content/70 leading-relaxed">
                  {eco.description}
                </p>
              </div>

              <div className="pt-4 border-t border-base-content/5 mt-4 text-[11px] font-bold text-base-content/50 group-hover:text-primary flex items-center gap-1">
                Visit {eco.domain} <ArrowRight className="w-3 h-3" />
              </div>
            </a>
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
