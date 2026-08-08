import React from 'react';
import { ArrowRight, Search, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero({ onOpenAudit }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-grid-overlay">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-6 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SEO & Organic Growth Agency
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-6">
              Search Higher. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Grow Smarter.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              QIBIXEL helps ambitious businesses turn search visibility into sustainable organic growth through technical SEO, strategic content, data, and intelligent optimization.
            </p>

            {/* Primary and Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenAudit}
                className="group relative px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-semibold text-slate-950 hover:text-slate-950 text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Search className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Get Your Free SEO Audit</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-7 py-4 rounded-xl glass-panel text-slate-200 hover:text-white font-semibold text-sm hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-center gap-2 border border-slate-800"
              >
                Explore Our Services
              </a>
            </div>

            {/* Small Trust Statement */}
            <div className="pt-6 border-t border-slate-800/80 w-full">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Capabilities:</span>
              </div>
              <div className="text-xs font-medium text-slate-400 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2">
                <span className="hover:text-cyan-400 transition-colors">Technical SEO</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">Content Strategy</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">Local SEO</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">E-commerce SEO</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">SEO Analytics</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroCanvas />
          </div>

        </div>

      </div>
    </section>
  );
}
