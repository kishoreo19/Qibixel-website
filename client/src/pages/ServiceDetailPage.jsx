import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import FinalCTA from '../components/FinalCTA';
import { 
  Cpu, 
  FileCode, 
  Layers, 
  MapPin, 
  ShoppingBag, 
  Globe, 
  BarChart3, 
  Share2, 
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Cpu,
  FileCode,
  Layers,
  MapPin,
  ShoppingBag,
  Globe,
  BarChart3,
  Share2
};

export default function ServiceDetailPage({ onOpenAudit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === id) || servicesData[0];
  const Icon = iconMap[service.iconName] || Cpu;

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Back Link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Service Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-mono text-accent font-bold mb-4">
              <span>/ SERVICE MODULE {service.id}</span>
            </div>
            
            <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              {service.title}
            </h1>

            <p className="text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-8">
              {service.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenAudit}
                className="px-7 py-3.5 rounded-xl bg-[#8CFF00] hover:bg-[#9eff26] font-extrabold text-black text-sm uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Audit Your Domain for {service.title}</span>
                <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="px-7 py-3.5 rounded-xl bg-surface text-slate-900 dark:text-white font-bold text-sm border border-border hover:border-accent/40 transition-colors cursor-pointer"
              >
                Talk to a Specialist
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-40 h-40 rounded-3xl bg-surface border border-border flex items-center justify-center text-accent shadow-xl relative">
              <Icon className="w-20 h-20 stroke-[1.5]" />
              <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full" />
            </div>
          </div>
        </div>

        {/* Technical Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-card rounded-2xl p-8 border border-border bg-surface shadow-md">
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">
                Strategic Scope & Implementation Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">{feat}</div>
                        <div className="text-xs text-muted font-medium">Custom tailored to match your specific domain tech stack and search volume.</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-border bg-surface shadow-md space-y-4">
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                How QIBIXEL Executes {service.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                We perform granular diagnostic auditing, continuous log analysis, and iterative sprint execution. Every modification is backed by telemetry and verified against search crawler response codes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-border bg-surface shadow-md">
              <div className="text-xs font-mono text-accent uppercase mb-3 font-bold">/ EXPECTED OUTCOMES</div>
              <div className="space-y-3 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Crawl Efficiency</span>
                  <span className="text-accent font-bold">+140%</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Index Speed</span>
                  <span className="text-accent font-bold">Immediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk Level</span>
                  <span className="text-slate-400 font-bold">Zero Risk</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 text-center">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-sm font-bold text-white mb-2">Ready to optimize {service.title}?</div>
              <button
                onClick={onOpenAudit}
                className="w-full py-3 rounded-xl bg-cyan-500 font-bold text-slate-950 text-xs"
              >
                Run Free Instant Audit
              </button>
            </div>
          </div>

        </div>

      </div>

      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
