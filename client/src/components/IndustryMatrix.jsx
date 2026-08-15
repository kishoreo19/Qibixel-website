import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function IndustryMatrix() {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0].id);

  const activeData = industriesData.find((i) => i.id === selectedIndustry) || industriesData[0];

  return (
    <section id="industries" className="py-24 relative bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
              / TARGET VERTICALS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              SEO Built Around Your Market
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              Every market has different search behavior, competition, and buying journeys. QIBIXEL builds SEO strategies around the realities of your industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Industry Selector & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Industry Buttons list (10 cards) */}
          <ScrollReveal variant="fade-right" delay={100} className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-3">
            {industriesData.map((ind) => {
              const isSelected = ind.id === selectedIndustry;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-accent/15 border-accent text-accent font-bold shadow-md'
                      : 'bg-surface border-border text-slate-800 dark:text-slate-200 hover:border-accent/60 hover:text-accent'
                  }`}
                >
                  <div className="text-[10px] font-mono text-muted mb-1 uppercase font-bold">VERTICAL</div>
                  <div className="text-sm font-bold truncate">{ind.name}</div>
                </button>
              );
            })}
          </ScrollReveal>

          {/* Active Industry Detail Spotlight Card */}
          <ScrollReveal variant="fade-left" delay={200} className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-border bg-surface relative overflow-hidden shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-mono text-accent font-bold mb-6">
                INDUSTRY SPOTLIGHT
              </div>

              <h3 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white mb-4">
                {activeData.name}
              </h3>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-normal">
                {activeData.desc}
              </p>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-8 shadow-inner">
                <div className="text-xs font-mono text-slate-400-always uppercase tracking-widest mb-4 font-bold">
                  CORE OPTIMIZATION FOCUS
                </div>
                <div className="space-y-3">
                  {activeData.focus.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-white-always font-medium">
                      <CheckCircle2 className="w-4.5 h-4.5 text-accent flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8CFF00] hover:bg-[#9eff26] text-black font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Request {activeData.name} Strategy Brief</span>
                <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
              </Link>

              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-3xl pointer-events-none rounded-full" />
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

