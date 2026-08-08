import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudiesData';
import FinalCTA from '../components/FinalCTA';
import { ArrowLeft, CheckCircle2, Info, TrendingUp, Target, ShieldCheck } from 'lucide-react';

export default function CaseStudyDetailPage({ onOpenAudit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const cs = caseStudiesData.find((item) => item.id === id) || caseStudiesData[0];

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Back link */}
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>

        {/* Case Study Banner */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-4">
            <span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded border border-amber-500/30 uppercase font-bold">
              {cs.tag}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-semibold">{cs.industry}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            {cs.title}
          </h1>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{cs.note}</span>
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {cs.results.map((res, rIdx) => (
            <div key={rIdx} className="glass-card p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-xs font-mono text-slate-400 uppercase mb-2">{res.label}</div>
              <div className="font-display font-black text-4xl sm:text-5xl text-cyan-400 mb-1">{res.value}</div>
              <div className="text-[11px] text-emerald-400 font-mono">VERIFIED RESULT</div>
            </div>
          ))}
        </div>

        {/* Problem vs Strategy Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6 glass-card p-8 rounded-2xl border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">THE INITIAL CHALLENGE</div>
            <h3 className="font-display font-bold text-xl text-white">Structural Bottlenecks & Keyword Gaps</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">{cs.challenge}</p>
          </div>

          <div className="lg:col-span-6 glass-card p-8 rounded-2xl border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">QIBIXEL STRATEGY DEPLOYED</div>
            <h3 className="font-display font-bold text-xl text-white">Technical & Content Execution</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">{cs.strategy}</p>
          </div>
        </div>

      </div>

      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
