import React, { useState } from 'react';
import { insightsData, insightCategories } from '../data/insightsData';
import { Link, useNavigate } from 'react-router-dom';
import FinalCTA from '../components/FinalCTA';
import { Clock, Calendar, ArrowRight, BookOpen, Search } from 'lucide-react';

export default function InsightsPage({ onOpenAudit }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insightsData.filter((item) => {
    const matchesCat = selectedCategory === "All Insights" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-12 bg-grid-overlay">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            EDITORIAL THOUGHT LEADERSHIP
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-6">
            Ideas That Move Search Forward
          </h1>
          <p className="text-xl text-slate-300 font-normal leading-relaxed">
            In-depth strategic guides on technical SEO architecture, search intent optimization, Core Web Vitals engineering, and organic growth attribution.
          </p>
        </div>
      </div>

      {/* Category Pills & Search Input */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2">
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

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredInsights.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            No articles found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredInsights.map((article) => (
              <div
                key={article.id}
                className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                    <span className="text-cyan-400 uppercase font-bold">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-8">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  to={`/insights/${article.id}`}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Full Article
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
