import React from 'react';
import { Compass, Eye, Layers, Database, BarChart2, ShieldAlert } from 'lucide-react';

export default function WhyQibixel() {
  const pillars = [
    {
      title: "Strategy Before Tactics",
      desc: "We understand your business, audience, competition, and goals before recommending what to optimize.",
      icon: Compass
    },
    {
      title: "Search Intent First",
      desc: "We focus on why people search — not simply how many times a keyword appears.",
      icon: Eye
    },
    {
      title: "Technical + Content",
      desc: "Strong organic growth requires both a technically healthy website and genuinely useful content.",
      icon: Layers
    },
    {
      title: "Data-Driven Decisions",
      desc: "We use search data, analytics, competitors, and performance signals to prioritize high-impact opportunities.",
      icon: Database
    },
    {
      title: "Transparent Reporting",
      desc: "Clear reporting focused on meaningful progress rather than vanity metrics.",
      icon: BarChart2
    },
    {
      title: "Sustainable Growth",
      desc: "No shortcuts. No questionable tactics. Just a systematic approach designed to build lasting organic visibility.",
      icon: ShieldAlert
    }
  ];

  return (
    <section className="py-24 relative bg-[#090D15] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            THE QIBIXEL ADVANTAGE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            A More Intelligent Approach to SEO
          </h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">INTEL CORE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
