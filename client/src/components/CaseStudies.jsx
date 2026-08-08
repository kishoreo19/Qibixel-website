import React from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { ArrowRight, Info, TrendingUp, AlertCircle } from 'lucide-react';

export default function CaseStudies({ onSelectCaseStudy }) {
  return (
    <section id="case-studies" className="py-24 relative bg-[#090D15] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            VERIFIED CASE STUDIES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            Proof Over Promises.
          </h2>
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Explore how strategic SEO can create measurable improvements in visibility, traffic, leads, and business performance.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              onClick={() => onSelectCaseStudy && onSelectCaseStudy(cs)}
              className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Tag & Industry */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 font-semibold">
                    {cs.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cs.industry}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                  {cs.title}
                </h3>

                {/* Challenge & Strategy Brief */}
                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div>
                    <strong className="text-slate-400 uppercase tracking-wider block font-mono text-[10px] mb-1">CHALLENGE</strong>
                    <p className="line-clamp-2 text-slate-300">{cs.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-slate-400 uppercase tracking-wider block font-mono text-[10px] mb-1">STRATEGY</strong>
                    <p className="line-clamp-2 text-slate-300">{cs.strategy}</p>
                  </div>
                </div>

                {/* Key Metrics Display */}
                <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-xl bg-slate-950 border border-slate-800/80 mb-4">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="text-center">
                      <div className={`font-display font-bold text-base sm:text-lg ${res.highlight ? 'text-cyan-400' : 'text-emerald-400'}`}>
                        {res.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note & CTA */}
              <div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-4">
                  <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{cs.note}</span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl pointer-events-none rounded-full group-hover:bg-cyan-500/15 transition-all" />
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:text-white hover:border-cyan-500/40 transition-all"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
