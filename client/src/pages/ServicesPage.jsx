import React from 'react';
import { servicesData } from '../data/servicesData';
import { Link, useNavigate } from 'react-router-dom';
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
  ArrowRight,
  CheckCircle2
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

export default function ServicesPage({ onOpenAudit }) {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            CAPABILITIES & SPECIALIZATIONS
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-primary tracking-tight leading-tight mb-6">
            Core Disciplines of Modern Organic Search
          </h1>
          <p className="text-xl text-slate-300 font-normal leading-relaxed">
            From technical infrastructure and Core Web Vitals to commercial search intent and digital PR, QIBIXEL brings every element of modern SEO under one unified strategy.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Cpu;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-cyan-400">
                      SERVICE {service.id}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-primary mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-base text-slate-300 leading-relaxed font-normal mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-8 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">KEY DELIVERABLES:</div>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all"
                >
                  <span>Explore Service Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
