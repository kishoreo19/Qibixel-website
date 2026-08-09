import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Layers, Award, Target, ArrowUpRight, CheckCircle2, ChevronRight, Activity, Search, ShieldCheck } from 'lucide-react';

function AnimatedCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Parse numeric target and suffix
  const match = value ? value.match(/^([^\d]*)([\d.]+)(.*)$/) : null;
  const prefix = match ? match[1] : '';
  const numericTarget = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || isNaN(numericTarget)) return;

    let start = 0;
    const end = numericTarget;
    if (start === end) {
      setCount(end);
      return;
    }

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing: easeOutQuad
      const easeProgress = progressPercentage * (2 - progressPercentage);
      const currentCount = easeProgress * (end - start) + start;

      if (end < 10) {
        setCount(parseFloat(currentCount.toFixed(1)));
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, numericTarget, duration]);

  if (isNaN(numericTarget)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={elementRef} className="inline-block">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function MetricResults() {
  const [activeTab, setActiveTab] = useState('traffic');

  const metrics = [
    {
      id: 'traffic',
      value: "3M+",
      label: "Organic Visits",
      icon: TrendingUp,
      subtext: "Sustainable, non-paid acquisition traffic"
    },
    {
      id: 'rankings',
      value: "200+",
      label: "Top 3 Rankings",
      icon: Target,
      subtext: "High-intent commercial keywords"
    },
    {
      id: 'projects',
      value: "150+",
      label: "Sites Audited",
      icon: Layers,
      subtext: "Technical architecture optimizations"
    },
    {
      id: 'experience',
      value: "5+ Years",
      label: "Core Adaptation",
      icon: Award,
      subtext: "Resiliency to core search updates"
    }
  ];

  const keywordsData = [
    { query: "enterprise saas platform", prevRank: "14", currentRank: "2", status: "Page 1 Leader", trafficLift: "+820%" },
    { query: "headless storefront audit", prevRank: "24", currentRank: "1", status: "Rank #1 Position", trafficLift: "+1,240%" },
    { query: "local business locator API", prevRank: "9", currentRank: "2", status: "Page 1 Top Spot", trafficLift: "+380%" },
    { query: "commercial intent keywords", prevRank: "18", currentRank: "3", status: "Page 1 Leader", trafficLift: "+590%" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-grid-overlay">
      <div className="absolute top-1/2 left-0 w-[450px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
            MEASURABLE PERFORMANCE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight leading-tight mb-6">
            SEO That Connects Visibility With Revenue
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed font-normal">
            Rankings are only one part of search visibility. QIBIXEL focuses on the complete organic growth journey — from technical indexation and search intent to conversions and business outcomes.
          </p>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Controllers: 4 Metrics Selector Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {metrics.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group flex items-start gap-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/10 to-transparent border-cyan-500 text-primary shadow-lg shadow-cyan-500/5'
                      : 'bg-surface/50 border-border/80 text-muted hover:border-slate-700 hover:bg-slate-900/10'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isActive 
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' 
                      : 'bg-cyan-500/15 text-accent group-hover:scale-115'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-2xl tracking-tight text-primary">
                        <AnimatedCounter value={item.value} />
                      </span>
                      <span className="text-xs font-semibold text-secondary truncate">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1 leading-relaxed truncate-3-lines">
                      {item.subtext}
                    </p>
                  </div>
                  
                  <ChevronRight className={`w-4 h-4 ml-auto self-center transition-transform ${
                    isActive ? 'text-accent translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Spotlight Panel: Interactive Mock Dashboard Screen */}
          <div className="lg:col-span-7">
            <div className="w-full h-full bg-slate-950-always rounded-3xl p-6 sm:p-8 border border-slate-800-always flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              {/* Mock Dashboard Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-800-always pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs font-mono text-accent uppercase font-bold tracking-wider">
                    QIBIXEL GROWTH DIAGNOSTIC
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900-always px-2.5 py-1 rounded border border-slate-800-always text-[10px] font-mono text-slate-450-always">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CRAWLER STATUS: ONLINE</span>
                </div>
              </div>

              {/* Dynamic Screen Content based on Active tab */}
              <div className="flex-grow flex flex-col justify-center min-h-[220px]">
                
                {/* Traffic Tab: SVG Graph */}
                {activeTab === 'traffic' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400-always uppercase">Organic Acquisition Graph</div>
                        <div className="text-lg font-bold text-white-always">Monthly Search Growth Curve</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-emerald-400 font-bold">+184% MoM</div>
                        <div className="text-[9px] font-mono text-slate-450-always">Core traffic sources</div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-905-always p-4 rounded-xl border border-slate-900-always">
                      <svg className="w-full h-32" viewBox="0 0 400 120">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" />
                        <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" />
                        <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" />
                        
                        {/* Traffic curve */}
                        <path
                          d="M 0 100 Q 80 85 140 60 T 260 40 T 400 10"
                          fill="none"
                          stroke="#06B6D4"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Filled Gradient below line */}
                        <path
                          d="M 0 100 Q 80 85 140 60 T 260 40 T 400 10 L 400 120 L 0 120 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Data point indicators */}
                        <circle cx="140" cy="60" r="4.5" fill="#06B6D4" stroke="#ffffff" strokeWidth="1.5" />
                        <circle cx="260" cy="40" r="4.5" fill="#10B981" stroke="#ffffff" strokeWidth="1.5" />
                      </svg>
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-450-always mt-2">
                        <span>MONTH 1</span>
                        <span>MONTH 3 (Optimization)</span>
                        <span>MONTH 6 (Scale)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rankings Tab: Table */}
                {activeTab === 'rankings' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400-always uppercase">Google Search Console Diagnostics</div>
                        <div className="text-lg font-bold text-white-always">Target Keyword Leap Progress</div>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-800-always bg-slate-900-always">
                      <table className="w-full text-left font-mono text-[10px]">
                        <thead>
                          <tr className="border-b border-slate-800-always text-slate-400-always bg-slate-950-always">
                            <th className="p-3">Search Query</th>
                            <th className="p-3 text-center">Previous</th>
                            <th className="p-3 text-center">Current</th>
                            <th className="p-3 text-right">Attributed Lift</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800-always text-slate-300-always">
                          {keywordsData.map((kw, idx) => (
                            <tr key={idx} className="hover:bg-slate-950-always/50">
                              <td className="p-3 font-semibold text-white-always">{kw.query}</td>
                              <td className="p-3 text-center text-slate-500-always">Page {Math.ceil(parseInt(kw.prevRank)/10)}</td>
                              <td className="p-3 text-center text-emerald-450 font-bold">Rank #{kw.currentRank}</td>
                              <td className="p-3 text-right text-emerald-450 font-bold">{kw.trafficLift}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Projects Tab: Page Speed & Health */}
                {activeTab === 'projects' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400-always uppercase">Lighthouse Core Web Vitals API</div>
                        <div className="text-lg font-bold text-white-always">Technical Site Health Scoring</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-1">
                      {[
                        { label: 'SEO Audit Score', value: '98%', desc: 'Canonical tags & sitemaps' },
                        { label: 'Core Vitals INP', value: '38ms', desc: 'Interactive page response' },
                        { label: 'LCP Score', value: '0.8s', desc: 'Time to visual render' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900-always p-4 rounded-xl border border-slate-800-always text-center flex flex-col justify-between animate-fade-in-up">
                          <div className="text-[9px] font-mono text-slate-400-always uppercase mb-1">{item.label}</div>
                          <div className="text-2xl font-display font-black text-cyan-400 font-mono my-2">{item.value}</div>
                          <div className="text-[9px] text-slate-450-always">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience Tab: Adaptation */}
                {activeTab === 'experience' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400-always uppercase">Search Engine Adaptation Logs</div>
                        <div className="text-lg font-bold text-white-always">Resiliency Monitoring</div>
                      </div>
                    </div>

                    <div className="bg-slate-900-always p-4 rounded-xl border border-slate-800-always font-mono text-[10px] space-y-2 text-slate-350-always max-h-[140px] overflow-y-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">[SUCCESS]</span>
                        <span>Google August 2024 Core Update - Resiliency validated. Zero site traffic drop.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">[SUCCESS]</span>
                        <span>Adaptation to Interaction to Next Paint (INP) core metric - Complete technical migration.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">[MONITOR]</span>
                        <span>Evaluating AI Overview (SGE) search source attribution models for index expansion.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">[SUCCESS]</span>
                        <span>Helpful Content Update - Algorithmic alignment audit applied.</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Notice Info */}
              <div className="mt-6 pt-4 border-t border-slate-800-always flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[10px] font-mono text-slate-400-always flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Real-time tracking of organic visibility metrics across user properties.</span>
                </div>
                <div className="text-[10px] font-mono font-bold text-accent flex items-center gap-0.5 hover:underline cursor-default">
                  <span>View client reports</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              <div className="absolute top-1/2 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl pointer-events-none rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
