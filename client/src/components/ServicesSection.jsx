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
import ScrollReveal from './ScrollReveal';

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
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
              / CORE DISCIPLINES
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Everything You Need to <span className="text-accent">Win in Search</span>
            </h2>
            <p className="text-lg text-muted font-normal leading-relaxed">
              From technical foundations to AI-search systems and authority, QIBIXEL brings the core disciplines of modern SEO together under one strategic approach.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Cpu;
            return (
              <ScrollReveal
                key={service.id}
                variant="fade-up"
                delay={(index % 4) * 100}
              >
                <div
                  onClick={() => onSelectService && onSelectService(service)}
                  className="glass-card p-7 rounded-2xl flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden border border-border bg-surface hover:border-accent/60 hover:shadow-xl h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-slate-950 transition-all duration-300">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-muted group-hover:text-accent transition-colors">
                        {service.id}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
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
                        <div key={fIdx} className="text-xs text-secondary flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:translate-x-1 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl pointer-events-none rounded-full group-hover:bg-accent/15 transition-all" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

