import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import { MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DISCOVERY & STRATEGY</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-primary tracking-tight leading-tight mb-6">
            Let’s Talk About Your Growth
          </h1>
          <p className="text-xl text-slate-300 font-normal leading-relaxed">
            Ready to unlock sustainable organic search performance? Connect with our strategic leads to review your search architecture and identify immediate revenue opportunities.
          </p>
        </div>
      </div>

      <ContactSection />
      <FAQSection />
    </div>
  );
}
