import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import FinalCTA from '../components/FinalCTA';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, CheckCircle2 } from 'lucide-react';

export default function InsightDetailPage({ onOpenAudit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = insightsData.find((a) => a.id === id) || insightsData[0];

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Back Link */}
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-4">
          <span className="bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/30 uppercase font-bold">
            {article.category}
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-3xl sm:text-5xl text-primary mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt Quote */}
        <p className="text-lg text-cyan-300 font-medium italic border-l-4 border-cyan-400 pl-6 py-2 mb-10 bg-slate-950/60 rounded-r-xl">
          "{article.excerpt}"
        </p>

        {/* Article Body */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-6 text-slate-300 text-base leading-relaxed font-normal mb-16">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Share & Author Card */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-bold text-cyan-400">
              Q
            </div>
            <div>
              <div className="text-sm font-bold text-white">QIBIXEL Search Intelligence Team</div>
              <div className="text-xs text-slate-400 font-mono">Organic Growth Editorial</div>
            </div>
          </div>

          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-2"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Article</span>
          </button>
        </div>

      </div>

      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
