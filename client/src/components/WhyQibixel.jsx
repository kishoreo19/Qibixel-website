import React from 'react';
import { Compass, Eye, Layers, Database, BarChart2, ShieldAlert } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
    <section className="py-24 relative bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
              / THE QIBIXEL ADVANTAGE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              A More Intelligent Approach to <span className="text-accent">SEO</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={(idx % 3) * 120}>
                <div
                  className="glass-card p-8 rounded-2xl flex flex-col justify-between group border border-border bg-surface hover:border-accent/50 h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted">
                    <span>PILLAR 0{idx + 1}</span>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity font-bold">INTEL CORE</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

