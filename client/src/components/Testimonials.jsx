import React from 'react';
import { Quote, Info } from 'lucide-react';

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
    <section className="py-24 relative bg-grid-overlay border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            CLIENT FEEDBACK
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Info className="w-3.5 h-3.5" />
            <span>Placeholder feedback — Replace with verified client testimonials before publishing.</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 sm:p-10 border border-slate-800 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-cyan-500/20 mb-6 group-hover:text-cyan-500/40 transition-colors" />

              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    {t.role}
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    {t.companyType}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  VERIFIED PARTNER
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
