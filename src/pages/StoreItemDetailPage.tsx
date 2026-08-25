import { useState } from 'react';
import { ArrowLeft, ExternalLink, Download, CheckCircle2, Terminal, Copy, Check, Star, Wrench, Box, Code } from 'lucide-react';
import { STORE_ITEMS, type StoreItem } from '../data/storeData';

interface StoreItemDetailPageProps {
  itemId: string;
  onNavigate: (page: string) => void;
}

export function StoreItemDetailPage({ itemId, onNavigate }: StoreItemDetailPageProps) {
  const item = STORE_ITEMS.find(i => i.id === itemId) || STORE_ITEMS[0];
  const [copiedCode, setCopiedCode] = useState(false);

  const installCommand = item.id === 'spriteeditor'
    ? 'code --install-extension sggames.sggspriteeditor'
    : item.githubUrl
    ? `git clone ${item.githubUrl}.git`
    : 'npm install @sggame/framework';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back button */}
      <button
        onClick={() => onNavigate('store')}
        className="btn btn-sm btn-ghost gap-2 rounded-xl text-xs font-semibold hover:bg-base-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Store & Developer Hub
      </button>

      {/* Main Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-secondary font-bold text-xs">{item.category}</span>
              <span className="badge badge-outline text-xs font-mono">{item.engine}</span>
              {item.badge && <span className="badge badge-ghost text-xs">{item.badge}</span>}
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl text-base-content">
              {item.title}
            </h1>

            <p className="text-base sm:text-lg text-secondary font-medium">
              {item.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
            {item.longDescription || item.description}
          </p>

          {/* Quick Install Terminal Snippet */}
          <div className="rounded-2xl bg-base-300 p-4 border border-base-content/10 font-mono text-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto">
              <Terminal className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="text-base-content/80 whitespace-nowrap">{installCommand}</span>
            </div>
            <button
              onClick={handleCopy}
              className="btn btn-xs btn-ghost gap-1 flex-shrink-0"
              title="Copy to clipboard"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedCode ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Screenshot Preview */}
          {item.coverImage && (
            <div className="rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl bg-base-300">
              <img src={item.coverImage} alt={item.title} className="w-full h-auto object-cover" />
            </div>
          )}
        </div>

        {/* Right Action & Spec Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-secondary/20 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-base-content/10">
              <div>
                <div className="text-xs text-base-content/50">License / Pricing</div>
                <div className="text-2xl font-heading font-black text-secondary">{item.price}</div>
              </div>
              <span className="badge badge-success badge-sm font-semibold">Available Now</span>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              {item.marketplaceUrl && (
                <a
                  href={item.marketplaceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary w-full rounded-xl font-bold gap-2 text-xs shadow-lg shadow-secondary/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Install from VS Code Marketplace
                </a>
              )}

              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline w-full rounded-xl font-bold gap-2 text-xs"
                >
                  <Code className="w-4 h-4" />
                  View GitHub Repository
                </a>
              )}
            </div>

            {/* Specs Table */}
            {item.specs && item.specs.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-base-content/10">
                <h4 className="font-heading font-bold text-xs uppercase text-base-content/50 tracking-wider">
                  Technical Specifications
                </h4>
                <div className="space-y-2 text-xs">
                  {item.specs.map(spec => (
                    <div key={spec.label} className="flex justify-between py-1 border-b border-base-content/5">
                      <span className="text-base-content/60">{spec.label}</span>
                      <span className="font-semibold text-base-content text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feature Breakdown Table / List */}
      <div className="pt-10 border-t border-base-content/10 space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading font-bold text-2xl text-base-content">
            Capabilities & Architecture
          </h2>
          <p className="text-xs text-base-content/60">
            Engineered for high performance, zero external bloat, and standard engine interoperability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {item.features.map((feat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-base-200/50 border border-base-content/5 space-y-2">
              <h4 className="font-heading font-bold text-sm text-base-content flex items-center gap-2">
                {feat.title}
              </h4>
              <p className="text-xs text-base-content/75 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
