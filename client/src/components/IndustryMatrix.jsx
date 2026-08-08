import React, { useState } from 'react';
import { industriesData } from '../data/industriesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function IndustryMatrix() {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0].id);

  const activeData = industriesData.find((i) => i.id === selectedIndustry) || industriesData[0];

  return (
    <section id="industries" className="py-24 relative bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            TARGET VERTICALS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            SEO Built Around Your Market
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Every market has different search behavior, competition, and buying journeys. QIBIXEL builds SEO strategies around the realities of your industry.
          </p>
        </div>

        {/* Interactive Industry Selector & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Industry Buttons list (10 cards) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-3">
            {industriesData.map((ind) => {
              const isSelected = ind.id === selectedIndustry;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                    isSelected
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-semibold shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono text-slate-400 mb-1 uppercase">VERTICAL</div>
                  <div className="text-sm font-bold truncate">{ind.name}</div>
                </button>
              );
            })}
          </div>

          {/* Active Industry Detail Spotlight Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6">
                INDUSTRY SPOTLIGHT
              </div>

              <h3 className="font-display font-extrabold text-3xl text-white mb-4">
                {activeData.name}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-8 font-normal">
                {activeData.desc}
              </p>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800/80 mb-8">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  CORE OPTIMIZATION FOCUS
                </div>
                <div className="space-y-3">
                  {activeData.focus.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-semibold text-slate-950 text-sm hover:opacity-95 transition-opacity"
              >
                <span>Request {activeData.name} Strategy Brief</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
