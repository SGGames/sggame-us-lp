import { Globe, MapPin, Sparkles, Heart, Rocket, Shield, Gamepad2, Wrench, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Established 2015</span>
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
          Bridging Innovation from Hanoi to Atlanta
        </h1>
        <p className="text-base text-base-content/75 leading-relaxed">
          SG Games was born with a mission to create engaging, accessible digital games and empower game developers worldwide with agile tooling.
        </p>
      </div>

      {/* Main Studio Narrative Banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-base-content/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-base-content">
              Our Journey & Philosophy
            </h2>
            <p className="text-sm text-base-content/80 leading-relaxed">
              Founded in 2015 in the vibrant tech hub of Hanoi, Vietnam, SG Games began with a mission to craft memorable interactive entertainment. Our early portfolio spanned casual mobile titles and pioneering interactive TV experiences, establishing our reputation for technical versatility and a player-first design philosophy.
            </p>
            <p className="text-sm text-base-content/80 leading-relaxed">
              In 2019, our creative journey expanded to Los Angeles, California, before settling our headquarters in <strong>Atlanta, Georgia</strong> in 2020. Today, we bridge international engineering excellence with the creative vitality of the US entertainment tech ecosystem.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-base-content/10 bg-base-300">
              <img
                src="/assets/images/img_55478654.jpg"
                alt="SG Games Journey"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Studio Timeline / Milestones */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-base-content">
            Studio Milestones
          </h2>
          <p className="text-xs text-base-content/60">Key chapters in our global development story</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_INFO.milestones.map((ms, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                {ms.image && (
                  <div className="h-44 rounded-xl overflow-hidden bg-base-300 border border-base-content/5 mb-3">
                    <img src={ms.image} alt={ms.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="badge badge-primary font-mono font-bold text-xs">{ms.year}</span>
                  <span className="text-xs text-base-content/50 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-primary" />
                    {ms.location}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-base-content">
                  {ms.title}
                </h3>
                <p className="text-xs text-base-content/70 leading-relaxed">
                  {ms.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="rounded-3xl bg-base-200/50 p-8 border border-base-content/10 space-y-6">
        <h2 className="font-heading font-bold text-2xl text-base-content text-center">
          Global Studio Hubs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {COMPANY_INFO.locations.map(loc => (
            <div key={loc.city} className="p-6 rounded-2xl bg-base-100/70 border border-base-content/5 space-y-2 text-center">
              <span className="badge badge-outline badge-sm font-semibold text-primary">{loc.badge}</span>
              <h3 className="font-heading font-bold text-lg text-base-content">{loc.city}</h3>
              <p className="text-xs text-base-content/60 font-medium">{loc.country}</p>
              <p className="text-xs text-base-content/75 pt-2">{loc.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
