import React, { useState } from 'react';
import { insightsData, insightCategories } from '../data/insightsData';
import InsightModal from './InsightModal';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function InsightsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredInsights = selectedCategory === "All Insights"
    ? insightsData
    : insightsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="insights" className="py-24 relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mb-12 text-center lg:text-left mx-auto lg:mx-0">
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 font-bold">
              / EDITORIAL THOUGHT LEADERSHIP
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Ideas That Move Search Forward
            </h2>
          </div>
        </ScrollReveal>

        {/* Category Pill Filters */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-border pb-6">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-accent/15 border border-accent/40 text-accent font-bold shadow-sm'
                    : 'bg-surface border border-border text-slate-700 dark:text-slate-300 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredInsights.map((article, idx) => (
            <ScrollReveal key={article.id} variant="fade-up" delay={idx * 120}>
              <div
                onClick={() => setActiveArticle(article)}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between group border border-border bg-surface hover:border-accent/50 cursor-pointer transition-all duration-300 relative overflow-hidden shadow-md h-full"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-muted mb-4 font-bold">
                    <span className="text-accent uppercase font-bold">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform pt-4 border-t border-border">
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Insight</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal variant="fade-up" delay={200} className="text-center">
          <button
            onClick={() => setActiveArticle(insightsData[0])}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-sm font-semibold text-secondary hover:text-primary hover:border-cyan-500/40 transition-all"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </button>
        </ScrollReveal>

      </div>

      {/* Reader Modal */}
      <InsightModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
}

