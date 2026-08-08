import React from 'react';
import { Info, TrendingUp, Layers, Award, Target } from 'lucide-react';

export default function MetricResults() {
  const metrics = [
    {
      value: "150+",
      label: "Projects Optimized",
      icon: Layers,
      subtext: "Technical restructuring & search intent alignment"
    },
    {
      value: "3M+",
      label: "Organic Visits Generated",
      icon: TrendingUp,
      subtext: "Sustainable, non-paid acquisition traffic"
    },
    {
      value: "200+",
      label: "Top 3 Keyword Rankings",
      icon: Target,
      subtext: "High-intent commercial search queries"
    },
    {
      value: "5+",
      label: "Years of SEO Experience",
      icon: Award,
      subtext: "Continuous adaptation to search algorithm updates"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            MEASURABLE PERFORMANCE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight leading-tight mb-6">
            SEO That Connects Visibility With Revenue
          </h2>
          <p className="text-lg text-muted leading-relaxed font-normal">
            Rankings are only one part of SEO. QIBIXEL focuses on the complete organic growth journey — from technical foundations and search intent to qualified traffic, conversions, and measurable business outcomes.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-7 rounded-2xl flex flex-col justify-between relative group border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-muted uppercase">QIBIXEL DATA</span>
                </div>

                <div>
                  <div className="font-display font-black text-4xl sm:text-5xl text-primary mb-2 tracking-tight group-hover:text-accent transition-colors">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-secondary mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted">
                    {item.subtext}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl pointer-events-none rounded-full group-hover:bg-cyan-500/15 transition-all" />
              </div>
            );
          })}
        </div>

        {/* Small Notice Note */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>Note: Replace these figures with verified QIBIXEL performance data before publishing.</span>
        </div>

      </div>
    </section>
  );
}
