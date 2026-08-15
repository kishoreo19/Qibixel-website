import React from 'react';
import { Search, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FinalCTA({ onOpenAudit, onScrollContact }) {
  return (
    <section className="py-24 relative overflow-hidden bg-grid-overlay bg-background transition-colors duration-300">
      
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal variant="scale-up">
          <div className="glass-card rounded-3xl p-10 sm:p-16 border border-border bg-surface shadow-2xl text-center relative overflow-hidden">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono tracking-wider uppercase mb-6 font-bold">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>START YOUR ORGANIC GROWTH JOURNEY</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4 uppercase">
              Your Customers Are Searching. <br />
              <span className="text-accent dark:text-lime-glow">
                Make Sure They Find You.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
              Let’s identify your biggest search opportunities and build a strategy designed around your business goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-9 py-4.5 rounded-xl bg-[#8CFF00] hover:bg-[#9eff26] text-black font-extrabold text-sm uppercase tracking-wider shadow-md dark:shadow-[0_0_30px_rgba(140,255,0,0.5)] hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Search className="w-4 h-4 text-black stroke-[3]" />
                <span>Get Your Free SEO Audit</span>
                <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
              </button>

              <button
                onClick={onScrollContact}
                className="w-full sm:w-auto px-9 py-4.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider border border-slate-300 dark:border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 hover:border-accent/40"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Talk to a Strategist</span>
              </button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

