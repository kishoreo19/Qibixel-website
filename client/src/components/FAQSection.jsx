import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Build FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 relative bg-background border-t border-border transition-colors duration-300">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-mono text-accent font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>/ TRANSPARENCY FIRST</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={(idx % 5) * 80}>
                <div
                  className="glass-card rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-accent/10 border-accent/40' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`accordion-content ${isOpen ? 'accordion-content-open' : ''}`}
                  >
                    <div className="accordion-inner">
                      <div className="px-6 pb-6 pt-0 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-border/60 font-normal">
                        <p className="mt-4">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

