import React from 'react';

export default function TrustStrip() {
  const categories = [
    "SaaS",
    "E-commerce",
    "Technology",
    "Professional Services",
    "Local Business",
    "Startups"
  ];

  return (
    <section className="py-10 border-y border-border bg-card/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-xs font-mono text-muted uppercase tracking-widest">
              Growth Architecture
            </p>
            <p className="text-sm font-semibold text-primary mt-0.5">
              Built for businesses that take organic growth seriously.
            </p>
          </div>

          {/* Categories Pill List */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                <div className="px-4 py-2 rounded-lg bg-surface border border-border text-xs font-medium text-secondary hover:text-accent hover:border-accent/40 transition-all cursor-default shadow-sm">
                  {cat}
                </div>
                {idx < categories.length - 1 && (
                  <span className="text-muted hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
