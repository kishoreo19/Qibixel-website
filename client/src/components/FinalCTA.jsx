import React from 'react';
import { Search, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA({ onOpenAudit, onScrollContact }) {
  return (
    <section className="py-24 relative overflow-hidden bg-grid-overlay bg-[#06080F]">
      
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-10 sm:p-16 border border-cyan-500/30 shadow-2xl text-center relative overflow-hidden glow-border-cyan">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>START YOUR ORGANIC GROWTH JOURNEY</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-primary tracking-tight leading-tight mb-4">
            Your Customers Are Searching. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Make Sure They Find You.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Let’s identify your biggest search opportunities and build a strategy designed around your business goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-semibold text-slate-950 text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Get Your Free SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 hover:text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 border border-slate-800"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Talk to a Strategist</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
