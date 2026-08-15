import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section id="about" className="py-24 relative bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <ScrollReveal variant="fade-right" className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
              / ABOUT QIBIXEL
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              We Don’t Chase Rankings. <br />
              <span className="text-accent">We Build Search Growth.</span>
            </h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8 font-normal">
              <p>
                Search is changing faster than ever. Algorithms evolve, competition increases, and users expect better answers. Sustainable SEO requires more than publishing content and targeting keywords.
              </p>
              <p>
                QIBIXEL combines technical SEO, search intent analysis, content strategy, competitive intelligence, authority building, and performance analytics to create SEO programs built around real business objectives.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                Our approach is simple: understand the opportunity, prioritize what matters, execute with precision, measure the impact, and continuously improve.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {[
                "Search Intent Analysis",
                "Technical Architecture",
                "Authority Link Acquisition",
                "Core Web Vitals Mastery",
                "Revenue Attribution",
                "Algorithmic Resiliency"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
            >
              <span>Discover QIBIXEL Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </ScrollReveal>

          {/* Right Abstract QIBIXEL Data Visualization Column */}
          <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-6 w-full">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border/85 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>QIBIXEL FRAMEWORK DIAGNOSTIC</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shadow" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shadow" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow" />
                </div>
              </div>

              {/* Interactive Framework Switcher */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { id: 'technical', label: 'Technical SEO' },
                  { id: 'intent', label: 'Search Intent' },
                  { id: 'analytics', label: 'Performance' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold shadow-md'
                        : 'bg-card/40 text-slate-400 hover:text-slate-200 border border-border/70 hover:bg-slate-900/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Framework Panel Displays */}
              <div className="space-y-4 font-mono text-xs text-slate-700 dark:text-slate-300">
                {activeTab === 'technical' && (
                  <div className="space-y-3">
                    <div className="w-full bg-slate-900-always h-2 rounded-full overflow-hidden border border-slate-800-always">
                      <div className="bg-gradient-to-r from-cyan-500 to-teal-450 h-full w-[92%]" />
                    </div>
                    <div className="text-[10px] text-slate-300-always bg-slate-900-always p-3 rounded border border-slate-800-always mt-2">
                      &gt; Log audit: Zero indexation blocks detected. Canonical tags validated across all rendering engines.
                    </div>
                  </div>
                )}

                {activeTab === 'intent' && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-400-always">
                      <span>Commercial Intent Signals</span>
                      <span className="text-cyan-400 font-bold">High Conversion Priority</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className="bg-slate-900-always p-2.5 rounded border border-slate-800-always text-[10px]">
                        <div className="text-slate-400-always">Target Keywords</div>
                        <div className="text-white-always font-bold">Category Leaders</div>
                      </div>
                      <div className="bg-slate-900-always p-2.5 rounded border border-slate-800-always text-[10px]">
                        <div className="text-slate-400-always">Topic Clusters</div>
                        <div className="text-emerald-450 font-bold">100% Coverage</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-300-always bg-slate-900-always p-3 rounded border border-slate-800-always">
                      &gt; User Journey: Intent mapped directly to landing page acquisition funnels.
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-400-always">
                      <span>Organic Attribution Lift</span>
                      <span className="text-emerald-450 font-bold">+184% MoM</span>
                    </div>
                    <div className="h-20 flex items-end justify-between gap-2 pt-2 px-1">
                      {[35, 42, 50, 68, 75, 88, 96, 110, 135, 160].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${(h / 160) * 100}%` }}
                          className="w-full bg-gradient-to-t from-cyan-600 to-emerald-400 rounded-t-sm shadow-sm"
                        />
                      ))}
                    </div>
                    <div className="text-[10px] text-slate-300-always bg-slate-900-always p-3 rounded border border-slate-800-always">
                      &gt; Continuous loop: Real-time telemetry monitoring search ranking fluctuations.
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
