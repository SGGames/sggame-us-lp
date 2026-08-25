import { useState, useEffect, useRef } from 'react';
import { Activity, Zap, Terminal, Sparkles } from 'lucide-react';

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 1. Counter number running animation
  useEffect(() => {
    const duration = 1800; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map(s => Math.round(s.targetNumber * ease)));

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

  // 2. Interactive Matrix Pixel Particle Wave & Ripple Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 220);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Pixel Particles & Matrix Rain Drops
    const pixelSize = 8;
    const cols = Math.floor(width / pixelSize);
    const rows = Math.floor(height / pixelSize);
    const drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -rows));

    // Floating particles
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#06b6d4' : '#10b981'
    }));

    // Ripple wave state
    let rippleTime = 0;
    let mouseRipple = { x: width / 2, y: height / 2, radius: 0, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRipple.x = e.clientX - rect.left;
      mouseRipple.y = e.clientY - rect.top;
      mouseRipple.radius = 0;
      mouseRipple.active = true;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      rippleTime += 0.04;
      ctx.clearRect(0, 0, width, height);

      // A. Draw Matrix Digital Grid with Wave Displacement
      ctx.fillStyle = 'rgba(6, 182, 212, 0.08)';
      for (let x = 0; x < cols; x += 2) {
        for (let y = 0; y < rows; y += 2) {
          // Calculate wave height from sine and cosine
          const wave = Math.sin(x * 0.15 + rippleTime) * Math.cos(y * 0.15 + rippleTime);
          if (wave > 0.4) {
            const px = x * pixelSize;
            const py = y * pixelSize;
            const size = pixelSize * 0.6 * (wave + 0.3);
            ctx.fillRect(px, py, size, size);
          }
        }
      }

      // B. Draw Interactive Mouse Ripple
      if (mouseRipple.active) {
        mouseRipple.radius += 2.5;
        ctx.strokeStyle = `rgba(6, 182, 212, ${Math.max(0, 0.6 - mouseRipple.radius / 150)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mouseRipple.x, mouseRipple.y, mouseRipple.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (mouseRipple.radius > 150) {
          mouseRipple.active = false;
        }
      }

      // C. Draw Matrix Rain Falling Pixels
      ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
      for (let i = 0; i < drops.length; i++) {
        if (i % 3 === 0) {
          const px = i * pixelSize;
          const py = drops[i] * pixelSize;

          // Leading bright pixel
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.fillRect(px, py, pixelSize * 0.8, pixelSize * 0.8);

          // Trail pixel
          ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
          ctx.fillRect(px, py - pixelSize, pixelSize * 0.8, pixelSize * 0.8);

          drops[i]++;
          if (drops[i] * pixelSize > height && Math.random() > 0.96) {
            drops[i] = 0;
          }
        }
      }

      // D. Draw Pixelate Floating Particles with Glow
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(rippleTime + p.x));
        // Pixel block shape
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      }
      ctx.globalAlpha = 1.0;

      // E. Draw horizontal scanline
      const scanlineY = ((rippleTime * 40) % (height + 40)) - 20;
      const grad = ctx.createLinearGradient(0, scanlineY, 0, scanlineY + 6);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
      grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.25)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanlineY, width, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-black/75 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden group">
      {/* Interactive Matrix Pixel Wave & Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair z-0"
      />

      {/* Cyber HUD Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-10" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-10" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-10" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-10" />

      {/* Top telemetry status bar */}
      <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/80 mb-6 pb-3 border-b border-cyan-500/20 relative z-10">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="tracking-widest uppercase font-bold">SG_CORE_METRICS // MATRIX_PIXEL_TELEMETRY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 uppercase">SYS_ACTIVE // WAVE_VFX_ON</span>
        </div>
      </div>

      {/* Numbers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="p-4 rounded-2xl bg-black/60 border border-cyan-500/25 hover:border-cyan-400 hover:bg-cyan-950/30 transition-all duration-300 relative group/box backdrop-blur-md"
          >
            {/* Ambient matrix corner glow */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 opacity-50 group-hover/box:opacity-100 transition-opacity" />

            <div className="font-heading font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 font-mono tracking-tight flex items-baseline justify-center">
              <span>{counts[idx]}</span>
              <span className="text-cyan-400 text-2xl sm:text-3xl ml-0.5">{stat.suffix}</span>
            </div>

            <div className="text-xs text-base-content/85 font-medium text-center mt-1.5 flex items-center justify-center gap-1">
              <span>{stat.label}</span>
            </div>

            {/* Matrix HUD progress mini bar */}
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
