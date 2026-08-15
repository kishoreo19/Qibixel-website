import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function TrustStrip() {
  const categories = [
    "Enterprise SaaS",
    "E-commerce Brands",
    "Fintech Platforms",
    "Deeptech & AI",
    "Professional Services",
    "Local Business Leaders",
    "Hypergrowth Startups",
    "Healthtech Systems"
  ];

  // Duplicate items twice to ensure full coverage and seamless animation looping
  const marqueeItems = [...categories, ...categories, ...categories];

  return (
    <section className="py-8 border-y border-border bg-card/60 backdrop-blur-md overflow-hidden relative transition-colors duration-300">
      {/* Side gradient masks for premium marquee fade-off */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <ScrollReveal variant="fade-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-4 flex flex-col md:flex-row items-center justify-between gap-4 relative z-20">
          <div className="text-center md:text-left flex-shrink-0">
            <p className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
              / GROWTH ARCHITECTURE VERTICALS
            </p>
            <p className="text-xs text-muted mt-0.5 font-medium">
              Powering organic acquisition across competitive global markets.
            </p>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full flex overflow-hidden relative py-2">
          <div className="flex gap-4 min-w-full shrink-0 animate-marquee-slow hover:[animation-play-state:paused] cursor-default">
            {marqueeItems.map((cat, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-full bg-surface border border-border text-xs font-mono font-bold text-slate-800 dark:text-white hover:text-accent hover:border-accent/60 hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgb(var(--color-accent))] shrink-0" />
                <span className="tracking-wide">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

