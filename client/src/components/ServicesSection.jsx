import React from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Cpu, 
  FileCode, 
  Layers, 
  MapPin, 
  ShoppingBag, 
  Globe, 
  BarChart3, 
  Share2, 
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

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-24 relative bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            CORE DISCIPLINES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight leading-tight mb-6">
            Everything You Need to Win in Search
          </h2>
          <p className="text-lg text-muted font-normal leading-relaxed">
            From technical foundations to content and authority, QIBIXEL brings the core disciplines of modern SEO together under one strategic approach.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Cpu;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service)}
                className="glass-card p-7 rounded-2xl flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-border">
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-muted flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl pointer-events-none rounded-full group-hover:bg-cyan-500/15 transition-all" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
