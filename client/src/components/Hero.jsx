import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import ScrollReveal from './ScrollReveal';

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
            
            {/* Monospace Eyebrow matching image: DIGITAL GROWTH / AI / WEB */}
            <ScrollReveal variant="fade-down" delay={0}>
              <div className="inline-flex items-center gap-2 text-[#65A30D] dark:text-[#8CFF00] text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 font-bold">
                <span>DIGITAL GROWTH</span>
                <span className="opacity-50">/</span>
                <span>AI</span>
                <span className="opacity-50">/</span>
                <span>WEB</span>
              </div>
            </ScrollReveal>

            {/* Main Headline matching image: BE SEEN. BE ANSWERED. BE REMEMBERED. */}
            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white leading-[1.03] mb-6 uppercase">
                BE SEEN. <br />
                <span className="text-[#65A30D] dark:text-[#8CFF00] dark:text-lime-glow font-black">
                  BE ANSWERED.
                </span> <br />
                BE REMEMBERED.
              </h1>
            </ScrollReveal>

            {/* Supporting Description matching image */}
            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
                We build search strategies, AI-ready content systems, and high-performance websites designed for the next generation of digital discovery.
              </p>
            </ScrollReveal>

            {/* Primary & Secondary Action CTA Buttons matching image */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <button
                  onClick={() => onOpenAudit('')}
                  className="px-8 py-4 rounded-xl bg-[#8CFF00] hover:bg-[#9eff26] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-md dark:shadow-[0_0_30px_rgba(140,255,0,0.45)] hover:shadow-[0_0_45px_rgba(140,255,0,0.75)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4.5 h-4.5 text-black stroke-[3]" />
                </button>

                <a
                  href="#services"
                  className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider border border-slate-300 dark:border-white/15 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5 hover:border-accent/40"
                >
                  <span>Explore Services</span>
                  <span className="text-base text-slate-500 dark:text-slate-300">↓</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Interactive Domain Input Bar for Instant SEO Scan */}
            <ScrollReveal variant="fade-up" delay={400} className="w-full max-w-xl">
              <form onSubmit={handleUrlSubmit} className="w-full mb-6 relative z-20">
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-2xl bg-surface/90 border border-border shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3 px-3.5 py-3 flex-1 min-w-0">
                    <Search className="w-4 h-4 text-accent flex-shrink-0" />
                    <input
                      type="text"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="Enter your website domain (e.g. Acme.com)"
                      className="w-full bg-transparent text-primary text-sm focus:outline-none font-sans placeholder-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#8CFF00] hover:bg-[#9eff26] text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Analyze Domain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </ScrollReveal>

            {/* Monospace Category Strip matching image: / SEO / AEO / WEB */}
            <ScrollReveal variant="fade-up" delay={500}>
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-slate-400 uppercase pt-2">
                <span className="text-[#8CFF00] font-bold">/ SEO</span>
                <span className="text-slate-600">/</span>
                <span className="text-[#8CFF00] font-bold">/ AEO</span>
                <span className="text-slate-600">/</span>
                <span className="text-[#8CFF00] font-bold">/ WEB</span>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 w-full relative">
            <ScrollReveal variant="scale-up" delay={200}>
              <HeroCanvas />
            </ScrollReveal>
            
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

