import { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Globe, MapPin, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-base-content tracking-tight">
          Contact SG Games
        </h1>
        <p className="text-base text-base-content/75 leading-relaxed">
          We collaborate with publishing partners, indie developers, and gaming platforms worldwide. Send us an inquiry and our team will get back to you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-base-content/10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-base-content">Message Sent Successfully</h3>
                <p className="text-xs text-base-content/70 max-w-sm mx-auto">
                  Thank you for reaching out! A representative from SG Games will review your message and reply to <strong>{formData.email}</strong> soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', inquiryType: 'general', message: '' }); }}
                  className="btn btn-sm btn-outline rounded-xl text-xs font-bold mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-base-content/70 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="input input-bordered w-full rounded-xl text-xs focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-base-content/70 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="input input-bordered w-full rounded-xl text-xs focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-base-content/70 uppercase tracking-wider">Inquiry Topic</label>
                  <select
                    value={formData.inquiryType}
                    onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="select select-bordered w-full rounded-xl text-xs focus:border-primary"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="publishing">Game Publishing / Distribution</option>
                    <option value="tools">Developer Tools & VS Code Extensions (SpriteEditor)</option>
                    <option value="support">Player Game Support</option>
                    <option value="media">Press & Media</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-base-content/70 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry or project..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="textarea textarea-bordered w-full rounded-xl text-xs focus:border-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-xl font-bold gap-2 text-xs shadow-lg shadow-primary/20"
                >
                  <Send className="w-4 h-4" />
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Direct Contact & Locations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-base-content/10 space-y-4">
            <h3 className="font-heading font-bold text-lg text-base-content flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Direct Email
            </h3>
            
            <p className="text-xs text-base-content/70">
              For direct partnership proposals or immediate assistance:
            </p>

            <div className="flex items-center justify-between p-3 rounded-xl bg-base-200 border border-base-content/5 font-mono text-xs">
              <span className="text-primary font-bold">{COMPANY_INFO.contacts.email}</span>
              <button
                onClick={handleCopyEmail}
                className="btn btn-xs btn-ghost gap-1"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Locations Card */}
          <div className="glass-panel rounded-3xl p-6 border border-base-content/10 space-y-4">
            <h3 className="font-heading font-bold text-lg text-base-content flex items-center gap-2">
              <Globe className="w-4 h-4 text-secondary" />
              Studio Presence
            </h3>

            <div className="space-y-3">
              {COMPANY_INFO.locations.map(loc => (
                <div key={loc.city} className="p-3 rounded-xl bg-base-200/50 border border-base-content/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-base-content">{loc.city}</span>
                    <span className="badge badge-ghost badge-xs">{loc.badge}</span>
                  </div>
                  <p className="text-[11px] text-base-content/60">{loc.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
