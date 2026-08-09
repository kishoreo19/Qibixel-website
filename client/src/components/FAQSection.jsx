import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    <section id="faq" className="py-24 relative bg-[#090D15] border-t border-slate-800/80">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENCY FIRST</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-border/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-[#080B11] dark:bg-[#030712] border border-border flex items-center justify-center text-cyan-400 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-cyan-500/10 border-cyan-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`accordion-content ${isOpen ? 'accordion-content-open' : ''}`}
                >
                  <div className="accordion-inner">
                    <div className="px-6 pb-6 pt-0 text-secondary text-xs sm:text-sm leading-relaxed border-t border-border/40 font-normal">
                      <p className="mt-4">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
