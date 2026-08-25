import { Gamepad2, Wrench, Shield, Mail, MapPin, ExternalLink, Code } from 'lucide-react';
import { GAMES_CATALOG } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-base-200/90 border-t border-base-content/10 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <span className="font-heading font-black text-xl text-white">SG</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-base-content">SG Games Studio</span>
              </div>
            </div>

            <p className="text-xs text-base-content/70 max-w-sm leading-relaxed">
              Indie game studio bridging innovation from <strong>Hanoi to Atlanta</strong>. Creators of popular casual and action games with 100M+ global plays, plus specialized developer tooling and open-source game frameworks.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="badge badge-outline badge-xs text-[11px] py-2 px-2.5 gap-1">
                <MapPin className="w-3 h-3 text-primary" /> Atlanta, Georgia
              </span>
              <span className="badge badge-outline badge-xs text-[11px] py-2 px-2.5 gap-1">
                <MapPin className="w-3 h-3 text-secondary" /> Los Angeles, California
              </span>
              <span className="badge badge-outline badge-xs text-[11px] py-2 px-2.5 gap-1">
                <MapPin className="w-3 h-3 text-accent" /> Hanoi
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/sggames"
                target="_blank"
                rel="noreferrer"
                className="btn btn-xs btn-ghost gap-1.5 text-xs text-base-content/70 hover:text-primary"
              >
                <Code className="w-3.5 h-3.5" />
                <span>github.com/sggames</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="mailto:sggamesvn@gmail.com"
                className="btn btn-xs btn-ghost gap-1.5 text-xs text-base-content/70 hover:text-primary"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>sggamesvn@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 3: Games Catalog */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-base-content/90 flex items-center gap-1.5">
              <Gamepad2 className="w-3.5 h-3.5 text-primary" />
              Featured Games
            </h4>
            <ul className="space-y-2 text-xs text-base-content/70">
              {GAMES_CATALOG.slice(0, 6).map(game => (
                <li key={game.id}>
                  <button
                    onClick={() => onNavigate(`games/${game.id}`)}
                    className="hover:text-primary transition-colors text-left"
                  >
                    {game.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('games')}
                  className="text-primary font-bold hover:underline"
                >
                  View all 15+ games ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Dev Tools & Store */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-base-content/90 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-secondary" />
              Dev Tools & Store
            </h4>
            <ul className="space-y-2 text-xs text-base-content/70">
              {STORE_ITEMS.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(`store/${item.id}`)}
                    className="hover:text-secondary transition-colors text-left"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/sggames"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary font-bold hover:underline flex items-center gap-1"
                >
                  <Code className="w-3.5 h-3.5" /> GitHub OpenSource ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-base-content/90">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs text-base-content/70">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">
                  About SG Games
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors">
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors flex items-center gap-1">
                  <Shield className="w-3 h-3 text-success" /> Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy/fairytalerunner')} className="hover:text-primary transition-colors pl-2 border-l border-base-content/20">
                  Fairy Tale Runner Privacy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy/witchmaze')} className="hover:text-primary transition-colors pl-2 border-l border-base-content/20">
                  Witch Maze Privacy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy/snakesaga')} className="hover:text-primary transition-colors pl-2 border-l border-base-content/20">
                  Snake Saga Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider my-8"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-base-content/50 gap-4">
          <p>© 2015 – 2026 SG Games (sggame.us). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/sggames" target="_blank" rel="noreferrer" className="hover:text-primary flex items-center gap-1 font-semibold">
              <Code className="w-3 h-3 text-primary" /> github.com/sggames
            </a>
            <span>•</span>
            <p>Crafted with ❤️ for players & indie developers worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
