import React from 'react';
import { Quote, Info } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "QIBIXEL gave us a much clearer understanding of where our organic growth opportunities were and what needed to happen next.",
      role: "Marketing Director",
      companyType: "Technology Company"
    },
    {
      quote: "The strategy was practical, transparent, and focused on business outcomes rather than meaningless ranking reports.",
      role: "Founder",
      companyType: "E-commerce Brand"
    }
  ];

  return (
    <section className="py-24 relative bg-grid-overlay border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
              / CLIENT FEEDBACK
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              What Our Clients Say
            </h2>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">
              <Info className="w-3.5 h-3.5" />
              <span>Placeholder feedback — Replace with verified client testimonials before publishing.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
              <div
                className="glass-card rounded-2xl p-8 sm:p-10 border border-border bg-surface flex flex-col justify-between relative group shadow-md hover:border-accent/50 transition-all h-full"
              >
                <Quote className="w-10 h-10 text-accent/30 mb-6 group-hover:text-accent/60 transition-colors" />

                <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-100 font-semibold leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {t.role}
                    </div>
                    <div className="text-xs font-mono text-accent font-bold mt-0.5">
                      {t.companyType}
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-700 dark:text-slate-400 font-bold uppercase">
                    VERIFIED PARTNER
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

