import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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

  const { theme, toggleTheme } = useTheme();

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
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && !mobileMenuOpen
          ? 'top-4 px-4 sm:px-6 lg:px-8'
          : 'top-0 px-0'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 transition-all duration-300 ${
          isScrolled && !mobileMenuOpen
            ? 'glass-panel rounded-2xl border border-border/80 shadow-2xl dark:shadow-slate-950/50 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Link to Home */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#080B11] dark:bg-[#030712] rounded-[7px] flex items-center justify-center">
                <span className="font-display font-black text-accent text-lg tracking-tighter group-hover:scale-110 transition-transform">Q</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-primary group-hover:text-accent transition-colors">
                QIBIXEL
              </span>
              <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 tracking-widest uppercase -mt-1 font-bold">
                SEO Consult
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-accent bg-cyan-500/10 border border-cyan-500/20 font-bold' 
                      : 'text-muted hover:text-primary hover:bg-slate-200/40 dark:hover:bg-slate-800/40 border border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-850 transition-all focus:outline-none border border-transparent hover:border-border/60"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={onOpenAudit}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 p-[1px] focus:outline-none shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all"
            >
              <div className="px-5 py-2.5 rounded-[11px] bg-background group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                <Search className="w-4 h-4 text-accent group-hover:text-white dark:group-hover:text-slate-950 transition-colors" />
                <span className="text-xs font-semibold tracking-wide text-primary group-hover:text-white dark:group-hover:text-slate-950">
                  Get an SEO Audit
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent group-hover:text-white dark:group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted hover:text-primary focus:outline-none relative z-50 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Slide-out Panel (half-page side drawer) */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-40 bg-surface border-l border-border/80 w-[75vw] sm:w-[50vw] max-w-[300px] h-screen p-6 pt-24 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 mt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-display font-bold transition-all border-b border-slate-200/10 dark:border-slate-800/20 pb-2.5 flex items-center justify-between ${
                  isActive ? 'text-accent translate-x-1.5 font-bold' : 'text-muted hover:text-primary'
                }`
              }
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </NavLink>
          ))}
        </div>
        <div className="pt-6 pb-4 mt-auto">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-bold text-xs uppercase tracking-wider text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <Search className="w-4 h-4" />
            <span>Free SEO Audit</span>
          </button>
        </div>
      </div>
    </header>
  );
}
