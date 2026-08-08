import React, { useState } from 'react';
import { insightsData, insightCategories } from '../data/insightsData';
import InsightModal from './InsightModal';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default function InsightsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredInsights = selectedCategory === "All Insights"
    ? insightsData
    : insightsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="insights" className="py-24 relative bg-[#090D15] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-center lg:text-left mx-auto lg:mx-0">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            EDITORIAL THOUGHT LEADERSHIP
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            Ideas That Move Search Forward
          </h2>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-800/80 pb-6">
          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-bold'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredInsights.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                  <span className="text-cyan-400 uppercase font-semibold">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-800/80">
                <BookOpen className="w-4 h-4" />
                <span>Read Full Insight</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setActiveArticle(insightsData[0])}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:text-white hover:border-cyan-500/40 transition-all"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>

      {/* Reader Modal */}
      <InsightModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
}
