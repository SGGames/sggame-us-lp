import { useState, useEffect } from 'react';
import { Sparkles, Terminal, Activity, Zap } from 'lucide-react';

interface StatItem {
  label: string;
  targetNumber: number;
  suffix: string;
  value: string;
}

interface SciFiMatrixCounterProps {
  stats: StatItem[];
}

export function SciFiMatrixCounter({ stats }: SciFiMatrixCounterProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [glitchText, setGlitchText] = useState<string[]>(stats.map(s => s.value));

  useEffect(() => {
    // 1. Smooth counter increment
    const duration = 1800; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map(s => Math.round(s.targetNumber * ease)));

      // Matrix scramble effect for first 60% of duration
      if (progress < 0.8) {
        const chars = '0123456789ABCDEF#$*!~';
        setGlitchText(
          stats.map(s => {
            const scrambled = Array.from({ length: 3 })
              .map(() => chars[Math.floor(Math.random() * chars.length)])
              .join('');
            return scrambled + s.suffix;
          })
        );
      } else {
        setGlitchText(stats.map(s => s.value));
      }

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(stats.map(s => s.targetNumber));
        setGlitchText(stats.map(s => s.value));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [stats]);

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-black/60 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden group">
      {/* Sci-Fi Matrix Grid Lines & Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

      {/* Cyber HUD Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

      {/* Header telemetry info */}
      <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/80 mb-6 pb-3 border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="tracking-widest uppercase font-bold">SG_CORE_METRICS // REALTIME_TELEMETRY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 uppercase">SYS_ONLINE</span>
        </div>
      </div>

      {/* Numbers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="p-4 rounded-2xl bg-base-300/40 border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-950/20 transition-all duration-300 relative group/box"
          >
            {/* Ambient matrix corner glow */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 opacity-40 group-hover/box:opacity-100 transition-opacity" />

            <div className="font-heading font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 font-mono tracking-tight flex items-baseline justify-center">
              <span>{counts[idx]}</span>
              <span className="text-cyan-400 text-2xl sm:text-3xl ml-0.5">{stat.suffix}</span>
            </div>

            <div className="text-xs text-base-content/80 font-medium text-center mt-1.5 flex items-center justify-center gap-1">
              <span>{stat.label}</span>
            </div>

            {/* Matrix HUD mini bar */}
            <div className="w-full bg-cyan-950/60 h-1 rounded-full overflow-hidden mt-3">
              <div
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-1000"
                style={{ width: `${Math.min(100, (counts[idx] / stat.targetNumber) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
