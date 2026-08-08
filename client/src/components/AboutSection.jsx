import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section id="about" className="py-24 relative bg-[#090D15] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              ABOUT QIBIXEL
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight leading-tight mb-6">
              We Don’t Chase Rankings. <br />
              <span className="text-cyan-400">We Build Search Growth.</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
              <p>
                Search is changing faster than ever. Algorithms evolve, competition increases, and users expect better answers. Sustainable SEO requires more than publishing content and targeting keywords.
              </p>
              <p>
                QIBIXEL combines technical SEO, search intent analysis, content strategy, competitive intelligence, authority building, and performance analytics to create SEO programs built around real business objectives.
              </p>
              <p className="font-medium text-primary">
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
                <div key={idx} className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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

          </div>

          {/* Right Abstract QIBIXEL Data Visualization Column */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Activity className="w-4 h-4" />
                  <span>QIBIXEL FRAMEWORK DIAGNOSTIC</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
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
                    className={`py-2 px-3 rounded-lg text-xs font-mono transition-all ${
                      activeTab === tab.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Visualization Dynamic Graphic */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-4">
                {activeTab === 'technical' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Crawl Budget Efficiency</span>
                      <span className="text-emerald-400">99.4%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[99.4%]" />
                    </div>
                    <div className="flex justify-between items-center text-slate-400 pt-1">
                      <span>Core Web Vitals INP</span>
                      <span className="text-cyan-400">42ms (Good)</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[92%]" />
                    </div>
                    <div className="text-[11px] text-slate-400 bg-slate-900/80 p-3 rounded border border-slate-800 mt-2">
                      &gt; Log audit: Zero indexation blocks detected. Canonical tags validated across all rendering engines.
                    </div>
                  </div>
                )}

                {activeTab === 'intent' && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-400">
                      <span>Commercial Intent Signals</span>
                      <span className="text-cyan-400">High Conversion Priority</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-[11px]">
                        <div className="text-slate-400">Target Keywords</div>
                        <div className="text-white font-bold">Category Leaders</div>
                      </div>
                      <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-[11px]">
                        <div className="text-slate-400">Topic Clusters</div>
                        <div className="text-emerald-400 font-bold">100% Coverage</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400 bg-slate-900/80 p-3 rounded border border-slate-800">
                      &gt; User Journey: Intent mapped directly to landing page acquisition funnels.
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-400">
                      <span>Organic Attribution Lift</span>
                      <span className="text-emerald-400">+184% MoM</span>
                    </div>
                    <div className="h-20 flex items-end justify-between gap-1.5 pt-2">
                      {[35, 42, 50, 68, 75, 88, 96, 110, 135, 160].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${(h / 160) * 100}%` }}
                          className="w-full bg-gradient-to-t from-cyan-600 to-emerald-400 rounded-t"
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-400 bg-slate-900/80 p-3 rounded border border-slate-800">
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
