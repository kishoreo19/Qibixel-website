import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Layers, Search, BarChart2, Mail } from 'lucide-react';

export default function MobileNavDock({ onOpenAudit }) {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Layers },
    { name: 'Audit', action: () => onOpenAudit(''), icon: Search, isAction: true },
    { name: 'Work', path: '/case-studies', icon: BarChart2 },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-safe pt-2 bg-surface/90 backdrop-blur-2xl border-t border-border/80 shadow-[0_-10px_25px_rgba(0,0,0,0.3)] transition-all duration-300"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          
          if (item.isAction) {
            return (
              <button
                key={idx}
                onClick={item.action}
                className="flex flex-col items-center justify-center -mt-5 group focus:outline-none"
              >
                <div className="w-12 h-12 rounded-full bg-[#8CFF00] text-black flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_rgba(140,255,0,0.5)] group-active:scale-95 transition-transform duration-200 border-2 border-background">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-mono font-bold text-accent mt-0.5 uppercase tracking-wider">
                  Audit
                </span>
              </button>
            );
          }

          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={idx}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-accent font-bold'
                  : 'text-muted hover:text-primary'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] font-mono uppercase tracking-wider mt-1 font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
