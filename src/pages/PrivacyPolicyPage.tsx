import { useState } from 'react';
import { Shield, FileText, CheckCircle2, Lock, Eye, AlertCircle } from 'lucide-react';
import { PRIVACY_POLICIES } from '../data/companyData';

interface PrivacyPolicyPageProps {
  policySlug?: string;
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ policySlug, onNavigate }: PrivacyPolicyPageProps) {
  const initialKey = policySlug && PRIVACY_POLICIES[policySlug] ? policySlug : 'default';
  const [activeTab, setActiveTab] = useState<string>(initialKey);

  const policy = PRIVACY_POLICIES[activeTab] || PRIVACY_POLICIES['default'];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>Player & Data Protection</span>
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-base-content/70 leading-relaxed">
          We are committed to player transparency, child safety, and responsible data management across all SG Games applications.
        </p>
      </div>

      {/* Policy Selector Tabs */}
      <div className="flex items-center justify-center gap-2 border-b border-base-content/10 pb-4 overflow-x-auto">
        <button
          onClick={() => { setActiveTab('default'); onNavigate('privacy'); }}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'default' ? 'btn-primary shadow-md shadow-primary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          General Studio Policy
        </button>

        <button
          onClick={() => { setActiveTab('fairytalerunner'); onNavigate('privacy/fairytalerunner'); }}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'fairytalerunner' ? 'btn-primary shadow-md shadow-primary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          Forest Fairy Runner
        </button>

        <button
          onClick={() => { setActiveTab('witchmaze'); onNavigate('privacy/witchmaze'); }}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'witchmaze' ? 'btn-primary shadow-md shadow-primary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          Witch Maze
        </button>

        <button
          onClick={() => { setActiveTab('snakesaga'); onNavigate('privacy/snakesaga'); }}
          className={`btn btn-sm rounded-xl text-xs font-bold transition-all ${
            activeTab === 'snakesaga' ? 'btn-primary shadow-md shadow-primary/20' : 'btn-ghost text-base-content/70'
          }`}
        >
          Snake Saga
        </button>
      </div>

      {/* Main Policy Content Card */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-base-content/10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-base-content/10 gap-4">
          <div>
            <span className="badge badge-outline text-xs font-semibold mb-1">{policy.gameOrScope}</span>
            <h2 className="font-heading font-black text-2xl text-base-content">{policy.title}</h2>
          </div>
          <div className="text-right text-xs text-base-content/50">
            <div>Effective Date</div>
            <div className="font-mono font-semibold text-base-content">{policy.lastUpdated}</div>
          </div>
        </div>

        {/* Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-base-200/60 border border-base-content/5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-success">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero Sensitive Data</span>
            </div>
            <p className="text-[11px] text-base-content/70">No personal GPS or contacts collected.</p>
          </div>

          <div className="p-4 rounded-xl bg-base-200/60 border border-base-content/5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <Shield className="w-3.5 h-3.5" />
              <span>COPPA & Child Safe</span>
            </div>
            <p className="text-[11px] text-base-content/70">Family-friendly privacy standards.</p>
          </div>

          <div className="p-4 rounded-xl bg-base-200/60 border border-base-content/5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-secondary">
              <Eye className="w-3.5 h-3.5" />
              <span>Full User Control</span>
            </div>
            <p className="text-[11px] text-base-content/70">Opt-out & data deletion on request.</p>
          </div>
        </div>

        {/* Rendered HTML content */}
        <div
          className="prose prose-sm max-w-none text-base-content/80 prose-headings:font-heading prose-headings:text-base-content prose-strong:text-base-content prose-a:text-primary leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: policy.contentHtml }}
        />
      </div>
    </div>
  );
}
