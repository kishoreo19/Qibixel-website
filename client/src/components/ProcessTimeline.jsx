import React from 'react';
import { Search, ShieldAlert, Compass, Sliders, Wrench, BarChart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      desc: "Understand the business, audience, goals, competitors, and existing search performance.",
      icon: Search
    },
    {
      num: "02",
      name: "Audit",
      desc: "Identify technical issues, content gaps, authority weaknesses, and growth opportunities.",
      icon: ShieldAlert
    },
    {
      num: "03",
      name: "Strategize",
      desc: "Create a prioritized roadmap based on impact, opportunity, resources, and business value.",
      icon: Compass
    },
    {
      num: "04",
      name: "Optimize",
      desc: "Improve technical foundations, existing pages, internal links, information architecture, and on-page elements.",
      icon: Sliders
    },
    {
      num: "05",
      name: "Build",
      desc: "Develop useful content and authority-building initiatives aligned with search demand.",
      icon: Wrench
    },
    {
      num: "06",
      name: "Measure",
      desc: "Track performance, analyze results, identify new opportunities, and continuously improve.",
      icon: BarChart
    }
  ];

  return (
    <section className="py-24 relative bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
              / SYSTEMATIC METHODOLOGY
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              From Search Opportunity to Sustainable Growth
            </h2>
          </div>
        </ScrollReveal>

        {/* 6-Step Horizontal / Vertical Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.num} variant="fade-up" delay={(idx % 3) * 120}>
                <div
                  className="glass-card p-8 rounded-2xl border border-border bg-surface relative group flex flex-col justify-between shadow-md hover:border-accent/60 transition-all duration-300 h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono font-black text-3xl text-slate-900 dark:text-[#8CFF00]">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-accent group-hover:border-accent/40 transition-all">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                      {step.name}
                    </h3>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-700 dark:text-slate-400 font-bold">STAGE {step.num}</span>
                    <span className="text-accent font-bold">QIBIXEL EXECUTION</span>
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

