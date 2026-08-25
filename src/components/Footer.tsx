import { Gamepad2, Shield, Mail, Globe, Heart, ArrowUpRight, Code } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { GAMES_CATALOG } from '../data/gamesData';
import { STORE_ITEMS } from '../data/storeData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-base-300/60 border-t border-base-content/10 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-heading font-black text-xl shadow-md shadow-indigo-500/20">
                SG
              </div>
              <span className="font-heading font-bold text-xl text-base-content">SG Games Studio</span>
            </div>
            
            <p className="text-sm text-base-content/70 max-w-sm leading-relaxed">
              Indie game studio bridging innovation from <strong>Hanoi to Atlanta</strong>. Creators of popular casual and action games with 100M+ global plays, plus specialized developer tooling and open-source game frameworks.
            </p>

            {/* Studio Locations */}
            <div className="flex flex-wrap gap-2 pt-2">
              {COMPANY_INFO.locations.map(loc => (
                <span key={loc.city} className="badge badge-outline text-xs gap-1 py-3 px-2.5">
                  <Globe className="w-3 h-3 text-primary" />
                  {loc.city}
                </span>
              ))}
            </div>

            {/* Social / Repos */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.contacts.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-ghost btn-circle text-base-content/70 hover:text-base-content hover:bg-base-200"
                title="GitHub"
              >
                <Code className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-sm btn-ghost btn-circle text-base-content/70 hover:text-base-content hover:bg-base-200"
                title="Contact Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Games Col */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-base-content uppercase tracking-wider flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4 text-primary" />
              Featured Games
            </h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              {GAMES_CATALOG.slice(0, 6).map(g => (
                <li key={g.id}>
                  <button
                    onClick={() => onNavigate(`games/${g.id}`)}
                    className="hover:text-primary transition-colors text-left"
                  >
                    {g.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('games')}
                  className="text-primary font-semibold hover:underline flex items-center gap-1 text-xs pt-1"
                >
                  View all 15+ games <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Store & Tools Col */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-base-content uppercase tracking-wider">
              Dev Tools & Store
            </h4>
            <ul className="space-y-2 text-sm text-base-content/70">
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
            </ul>
          </div>

          {/* Company & Legal Col */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-base-content uppercase tracking-wider">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-sm text-base-content/70">
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
                  <Shield className="w-3.5 h-3.5 text-success" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy/fairytalerunner')} className="hover:text-primary transition-colors text-xs text-base-content/50">
                  Fairy Tale Runner Privacy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy/witchmaze')} className="hover:text-primary transition-colors text-xs text-base-content/50">
                  Witch Maze Privacy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy/snakesaga')} className="hover:text-primary transition-colors text-xs text-base-content/50">
                  Snake Saga Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-content/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/50">
          <p>© 2015 - {new Date().getFullYear()} SG Games (sggame.us). All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-error fill-error" />
            <span>for players & indie developers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
