import React from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { Link, useNavigate } from 'react-router-dom';
import FinalCTA from '../components/FinalCTA';
import { ArrowRight, Info, Award, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesPage({ onOpenAudit }) {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            VERIFIED CASE STUDIES
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-primary tracking-tight leading-tight mb-6">
            Proof Over Promises.
          </h1>
          <p className="text-xl text-slate-300 font-normal leading-relaxed">
            Detailed case studies demonstrating how QIBIXEL technical restructuring, search intent alignment, and authority building deliver measurable revenue impact.
          </p>
        </div>
      </div>

      {/* Case Studies Cards List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 font-bold">
                    {cs.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cs.industry}
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl text-primary mb-4 group-hover:text-cyan-400 transition-colors">
                  {cs.title}
                </h2>

                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div>
                    <strong className="text-slate-400 uppercase tracking-wider block font-mono text-[10px] mb-1">CHALLENGE</strong>
                    <p className="line-clamp-3 text-slate-300 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-slate-400 uppercase tracking-wider block font-mono text-[10px] mb-1">STRATEGY</strong>
                    <p className="line-clamp-3 text-slate-300 leading-relaxed">{cs.strategy}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="text-center">
                      <div className={`font-display font-bold text-base ${res.highlight ? 'text-cyan-400' : 'text-emerald-400'}`}>
                        {res.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-4">
                  <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{cs.note}</span>
                </div>

                <Link
                  to={`/case-studies/${cs.id}`}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
