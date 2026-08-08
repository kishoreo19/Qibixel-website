import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border text-muted text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1px]">
                <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-black text-accent text-lg tracking-tighter">Q</span>
                </div>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-primary">
                QIBIXEL
              </span>
            </Link>

            <p className="text-sm text-muted max-w-sm leading-relaxed font-normal">
              SEO and organic growth strategies built to turn search visibility into meaningful business growth.
            </p>

            <div className="pt-2 text-xs font-mono text-accent">
              SEARCH HIGHER. GROW SMARTER.
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-primary text-sm mb-4 tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/insights" className="hover:text-accent transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-primary text-sm mb-4 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/services/01" className="hover:text-accent transition-colors">Technical SEO</Link></li>
              <li><Link to="/services/02" className="hover:text-accent transition-colors">On-Page SEO</Link></li>
              <li><Link to="/services/03" className="hover:text-accent transition-colors">Content Strategy</Link></li>
              <li><Link to="/services/04" className="hover:text-accent transition-colors">Local SEO</Link></li>
              <li><Link to="/services/05" className="hover:text-accent transition-colors">E-commerce SEO</Link></li>
              <li><Link to="/services/06" className="hover:text-accent transition-colors">Enterprise SEO</Link></li>
              <li><Link to="/services/07" className="hover:text-accent transition-colors">SEO Analytics</Link></li>
              <li><Link to="/services/08" className="hover:text-accent transition-colors">Digital PR</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-bold text-primary text-sm mb-4 tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/insights" className="hover:text-accent transition-colors">SEO Insights</Link></li>
              <li><Link to="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors font-mono text-[11px]">XML Sitemap</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 QIBIXEL. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
