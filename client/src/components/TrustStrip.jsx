import React from 'react';

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
    <section className="py-8 border-y border-border bg-card/40 backdrop-blur-md overflow-hidden relative">
      {/* Side gradient masks for premium marquee fade-off */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-4 flex flex-col md:flex-row items-center justify-between gap-4 relative z-20">
        <div className="text-center md:text-left flex-shrink-0">
          <p className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
            Growth Architecture Verticals
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
              className="px-5 py-2.5 rounded-xl bg-surface/90 border border-border/80 text-xs font-mono font-semibold text-secondary hover:text-accent hover:border-accent/40 hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
