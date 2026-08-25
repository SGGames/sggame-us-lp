import { Gamepad2, Wrench, Sparkles, ArrowRight, Download, ExternalLink, Shield, Globe, Star, Play, Code } from 'lucide-react';
import { GAMES_CATALOG } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';
import { COMPANY_INFO } from '../data/companyData';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredGames = GAMES_CATALOG.filter(g => g.featured);
  const featuredTools = STORE_ITEMS.filter(s => s.featured);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-3xl -z-10 animate-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100M+ Global Game Plays Around The World</span>
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-base-content leading-[1.1]">
                We Create Games & <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Developer Tools</span>
              </h1>

              <p className="text-base sm:text-lg text-base-content/75 max-w-2xl leading-relaxed">
                From Hanoi to Atlanta — crafting high-energy indie action, immersive RPGs, casual arcade hits, and professional game creation toolkits like <strong>SGG-SpriteEditor</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('games')}
                  className="btn btn-primary shadow-lg shadow-primary/25 rounded-xl gap-2 font-bold px-6"
                >
                  <Gamepad2 className="w-5 h-5" />
                  Explore Games
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('store/spriteeditor')}
                  className="btn btn-outline border-base-content/20 hover:border-secondary hover:bg-secondary/10 hover:text-secondary rounded-xl gap-2 font-bold px-6"
                >
                  <Wrench className="w-4 h-4 text-secondary" />
                  Get SpriteEditor
                </button>
              </div>

              {/* Studio Stats Pill */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-base-content/10">
                {COMPANY_INFO.stats.map(stat => (
                  <div key={stat.label} className="p-3 rounded-xl bg-base-200/50 border border-base-content/5 text-center lg:text-left">
                    <div className="font-heading font-black text-2xl text-primary">{stat.value}</div>
                    <div className="text-xs text-base-content/60 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Visual: Featured Game Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="glass-card rounded-3xl p-4 shadow-2xl border border-base-content/10 relative overflow-hidden group">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-base-300">
                  <img
                    src="/assets/images/img_90532284.jpg"
                    alt="BotZ: Abandoned Dream"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge badge-primary font-bold">Featured Sci-Fi</span>
                      <span className="badge badge-neutral text-xs">FPS / Action</span>
                    </div>
                    <h3 className="font-heading font-black text-2xl text-white">BotZ: Abandoned Dream</h3>
                    <p className="text-xs text-white/80 line-clamp-2 mt-1">
                      Cyberpunk tactical survival FPS against rogue cybernetic bots in dystopian ruins.
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => onNavigate('games/botz')}
                        className="btn btn-sm btn-primary rounded-lg font-bold gap-1 text-xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        View Game
                      </button>
                      <button
                        onClick={() => onNavigate('games')}
                        className="btn btn-sm btn-ghost text-white hover:bg-white/10 rounded-lg text-xs"
                      >
                        More Titles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-2">
              <Gamepad2 className="w-4 h-4" />
              <span>Indie Game Portfolio</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-base-content">
              Top Action, RPG & Casual Hits
            </h2>
          </div>
          <button
            onClick={() => onNavigate('games')}
            className="btn btn-sm btn-outline gap-2 self-start md:self-auto rounded-lg text-xs font-semibold"
          >
            Browse All 15+ Games
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map(game => (
            <div
              key={game.id}
              onClick={() => onNavigate(`games/${game.id}`)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-base-300 overflow-hidden">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-1">
                    {game.badge && (
                      <span className="badge badge-primary badge-sm font-bold shadow">
                        {game.badge}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="badge badge-neutral/90 backdrop-blur-md text-xs font-semibold text-white">
                      {game.genre}
                    </span>
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
                  <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-base-content/5 mt-2 text-xs text-base-content/60">
                <span className="font-mono">{game.playersCount || '1M+ Players'}</span>
                <span className="font-semibold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Tooling & Store Spotlight */}
      <section className="bg-base-200/50 py-16 border-y border-base-content/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest">
              <Wrench className="w-4 h-4" />
              <span>Empowering Game Creators</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-base-content">
              Developer Tools & Game Templates
            </h2>
            <p className="text-sm text-base-content/70">
              Professional extension tools for VS Code, complete Unity project templates, and modular open-source libraries built by developers for developers.
            </p>
          </div>

          {/* Featured SpriteEditor Box */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-secondary/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge badge-secondary font-bold">VS Code Extension</span>
                  <span className="badge badge-outline text-xs">Atlas & Sprites</span>
                  <span className="badge badge-ghost text-xs font-mono">Free Extension</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-base-content">
                  SGG-SpriteEditor for Visual Studio Code
                </h3>

                <p className="text-sm text-base-content/80 leading-relaxed">
                  Open any atlas file (<code className="text-secondary font-mono">*.atlas.json</code>, <code className="text-secondary font-mono">*.plist</code>, <code className="text-secondary font-mono">LibGDX</code>), view your sprites on an interactive canvas, manipulate frames visually, remove chroma greenscreen backgrounds, and export directly in the format your engine expects.
                </p>

                {/* Key features bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-base-content/80 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Native Atlas JSON & Plist Editor
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Batch Image Format Conversion
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Greenscreen Chroma Key Removal
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Uniform Grid & Split Generators
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=sggames.sggspriteeditor"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary shadow-lg shadow-secondary/25 rounded-xl font-bold gap-2 text-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Install from VS Code Marketplace
                  </a>

                  <button
                    onClick={() => onNavigate('store/spriteeditor')}
                    className="btn btn-ghost border border-base-content/20 rounded-xl text-xs font-bold"
                  >
                    Documentation & Features
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl bg-base-300">
                  <img
                    src="/assets/images/img_56981251.png"
                    alt="SGG SpriteEditor Live in VS Code"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Unity Templates & Open Source Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTools.filter(t => t.id !== 'spriteeditor').map(tool => (
              <div
                key={tool.id}
                onClick={() => onNavigate(`store/${tool.id}`)}
                className="glass-card rounded-2xl p-6 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-outline badge-sm font-semibold">{tool.category}</span>
                    <span className="badge badge-ghost badge-sm font-mono">{tool.engine}</span>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-base-content group-hover:text-primary transition-colors">
                    {tool.title}
                  </h4>
                  <p className="text-xs text-base-content/70 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-base-content/5 mt-4 text-xs">
                  <span className="font-mono text-secondary font-bold">{tool.price}</span>
                  <span className="font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Mission & Global Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest">
              <Globe className="w-4 h-4" />
              <span>Our Story</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-base-content">
              Bridging Innovation from Hanoi to Atlanta
            </h2>

            <p className="text-sm text-base-content/75 leading-relaxed">
              Founded in 2015 in Hanoi, Vietnam, SG Games began with a vision to develop engaging, accessible digital experiences for players worldwide. In 2019, our journey expanded to Los Angeles, California, before settling our headquarters in <strong>Atlanta, Georgia</strong>.
            </p>

            <div className="space-y-3">
              {COMPANY_INFO.pillars.map((pillar, i) => (
                <div key={pillar.title} className="p-4 rounded-xl bg-base-200/60 border border-base-content/5 space-y-1">
                  <h4 className="font-heading font-bold text-sm text-base-content">{pillar.title}</h4>
                  <p className="text-xs text-base-content/65">{pillar.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="btn btn-outline rounded-xl text-xs font-bold gap-2"
            >
              Learn More About Our Team <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-base-content/10 shadow-lg bg-base-300">
              <img src="/assets/images/img_55478654.jpg" alt="SG Games Studio Team" className="w-full h-48 sm:h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-base-content/10 shadow-lg bg-base-300 mt-8">
              <img src="/assets/images/img_62703490.jpg" alt="SG Games Studio Office" className="w-full h-48 sm:h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-pink-900/50 border border-primary/30 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
              Have a Game Idea or Partnership In Mind?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We collaborate with global publishers, co-development studios, and indie creators. Reach out to our business team in Atlanta or Hanoi.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-primary rounded-xl font-bold px-8 shadow-xl shadow-primary/30"
              >
                Contact SG Games
              </button>
              <button
                onClick={() => onNavigate('privacy')}
                className="btn btn-ghost text-white/80 hover:text-white rounded-xl text-xs flex items-center gap-1.5"
              >
                <Shield className="w-4 h-4" />
                Player Privacy Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
