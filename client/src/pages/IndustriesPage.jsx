import React from 'react';
import IndustryMatrix from '../components/IndustryMatrix';
import FinalCTA from '../components/FinalCTA';
import { useNavigate } from 'react-router-dom';
import { Globe2 } from 'lucide-react';

export default function IndustriesPage({ onOpenAudit }) {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>MARKET VERTICALS</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-primary tracking-tight leading-tight mb-6">
            Industry-Tailored Organic Growth Frameworks
          </h1>
          <p className="text-xl text-slate-300 font-normal leading-relaxed">
            Search engine behavior varies significantly across commercial B2B, regulated YMYL sectors, and fast-paced e-commerce. Explore how QIBIXEL adapts its strategies for your vertical.
          </p>
        </div>
      </div>

      <IndustryMatrix />

      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
