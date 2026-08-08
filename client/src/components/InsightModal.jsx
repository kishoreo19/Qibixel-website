import React from 'react';
import { X, Clock, Calendar, ArrowRight, Share2 } from 'lucide-react';

export default function InsightModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close insight article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-4">
          <span className="bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/30 uppercase">
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

        {/* Title */}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-primary mb-6 leading-tight">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-base text-cyan-300/90 font-medium italic border-l-2 border-cyan-400 pl-4 py-1 mb-8">
          "{article.excerpt}"
        </p>

        {/* Full Content */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 font-normal">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">QIBIXEL EDITORIAL INSIGHTS</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
}
