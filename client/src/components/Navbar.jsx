import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';

export default function Navbar({ onOpenAudit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B11]/95 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Link to Home */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#080B11] rounded-[7px] flex items-center justify-center">
                <span className="font-display font-black text-cyan-400 text-lg tracking-tighter">Q</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                QIBIXEL
              </span>
              <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase -mt-1">
                SEO Consult
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenAudit}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 p-[1px] focus:outline-none"
            >
              <div className="px-5 py-2.5 rounded-[11px] bg-[#080B11] group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 transition-colors" />
                <span className="text-xs font-semibold tracking-wide text-white group-hover:text-slate-950">
                  Get an SEO Audit
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30"
            >
              SEO Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080B11]/98 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-1.5 transition-colors border-b border-slate-900 ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-slate-200 hover:text-cyan-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-semibold text-sm text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Search className="w-4 h-4" />
                Get Your Free SEO Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
