import React from 'react';
import { Search, ShieldAlert, Compass, Sliders, Wrench, BarChart } from 'lucide-react';

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
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            SYSTEMATIC METHODOLOGY
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight leading-tight">
            From Search Opportunity to Sustainable Growth
          </h2>
        </div>

        {/* 6-Step Horizontal / Vertical Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card p-8 rounded-2xl relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-black text-2xl text-cyan-400">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-cyan-500/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                    {step.name}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>STAGE {step.num}</span>
                  <span className="text-emerald-400">QIBIXEL EXECUTION</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
