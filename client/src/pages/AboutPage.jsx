import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyQibixel from '../components/WhyQibixel';
import ProcessTimeline from '../components/ProcessTimeline';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import { ShieldCheck, Compass, Target, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage({ onOpenAudit }) {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      
      {/* About Page Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE QIBIXEL IDENTITY</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-primary tracking-tight leading-tight mb-6">
            Intelligent Organic Growth Built for Ambitious Brands
          </h1>
          <p className="text-xl text-slate-300 font-normal leading-relaxed">
            QIBIXEL operates as a high-precision SEO consultancy. We reject generic agency playbooks in favor of custom search engineering, deep technical health, and bottom-line revenue attribution.
          </p>
        </div>
      </div>

      {/* Core Components */}
      <AboutSection />
      <WhyQibixel />
      <ProcessTimeline />
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
