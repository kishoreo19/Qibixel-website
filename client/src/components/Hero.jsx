import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero({ onOpenAudit }) {
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (websiteUrl.trim()) {
      // Pass domain input value to parent callback
      onOpenAudit(websiteUrl.trim());
    } else {
      onOpenAudit('');
    }
  };

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-grid-overlay">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-emerald-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-accent text-xs font-mono tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              SEO & ORGANIC GROWTH INTELLIGENCE
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-primary tracking-tight leading-[1.08] mb-6">
              Search Higher. <br />
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                Grow Smarter.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl mb-8">
              QIBIXEL turns organic visibility into sustainable acquisition revenue. We combine technical SEO architecture, strategic search intent, and data-driven optimizations.
            </p>

            {/* Interactive URL Input Bar (High Conversion CTA) */}
            <form onSubmit={handleUrlSubmit} className="w-full max-w-xl mb-3 relative z-20">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-2xl bg-surface/90 border border-border/80 shadow-2xl dark:shadow-slate-950/65 backdrop-blur-md">
                <div className="flex items-center gap-3 px-3.5 py-3 flex-1 min-w-0">
                  <Search className="w-4 h-4 text-accent flex-shrink-0" />
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Enter your website domain (e.g. Acme.com)"
                    className="w-full bg-transparent text-primary text-sm focus:outline-none font-sans placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-semibold text-slate-950 hover:shadow-cyan-500/25 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                >
                  <span>Analyze Domain</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </form>

            <div className="text-[11px] font-mono text-muted mb-8 flex items-center gap-1.5 justify-center lg:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Free diagnostic report generated instantly. No card required.</span>
            </div>

            {/* Core Capabilities statement */}
            <div className="pt-6 border-t border-border/70 w-full">
              <div className="text-xs font-mono uppercase tracking-widest text-muted mb-3 flex items-center justify-center lg:justify-start gap-2 font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>CORE PERFORMANCE PILLARS</span>
              </div>
              <div className="text-xs font-medium text-muted flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2">
                {["Technical Infrastructure", "Keyword Intent", "Core Web Vitals", "Authority Signals", "Local Search Optimization"].map((pill, idx) => (
                  <span key={idx} className="hover:text-accent transition-colors duration-250 cursor-default flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-350 dark:bg-slate-700" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 w-full relative">
            <HeroCanvas />
            
            {/* Absolute floating metrics cards (WOW factors) */}
            <div className="absolute -top-4 -left-4 bg-surface/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border/80 shadow-2xl flex items-center gap-2.5 animate-float hidden lg:flex">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-[9px] font-mono text-muted uppercase">Organic CTR</div>
                <div className="text-sm font-bold text-emerald-500 font-mono">+342.8%</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-surface/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border/80 shadow-2xl flex items-center gap-2.5 animate-float hidden lg:flex" style={{ animationDelay: '3s' }}>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-[9px] font-mono text-muted uppercase">WebVitals INP</div>
                <div className="text-sm font-bold text-cyan-450 font-mono">38ms (Perfect)</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
