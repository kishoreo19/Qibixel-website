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
        <div className="flex items-center gap-3 text-xs font-mono text-accent mb-4">
          <span className="bg-accent/10 text-accent px-3 py-1 rounded border border-accent/30 uppercase font-bold">
            {article.category}
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-muted font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-muted font-semibold">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-3xl sm:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt Quote */}
        <p className="text-lg text-accent font-medium italic border-l-4 border-accent pl-6 py-2 mb-10 bg-surface rounded-r-xl">
          "{article.excerpt}"
        </p>

        {/* Article Body */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-border bg-surface shadow-md space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal mb-16">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Share & Author Card */}
        <div className="p-6 rounded-2xl bg-surface border border-border flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-bold text-accent">
              Q
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">QIBIXEL Search Intelligence Team</div>
              <div className="text-xs text-muted font-mono">Organic Growth Editorial</div>
            </div>
          </div>

          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="px-4 py-2 rounded-xl bg-card border border-border text-xs text-slate-900 dark:text-white hover:text-accent flex items-center gap-2 font-semibold cursor-pointer"
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
