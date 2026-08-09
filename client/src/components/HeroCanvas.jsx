import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Node definitions for rank nodes
    const nodeCount = 38;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        label: i % 6 === 0 ? ['Rank #1', 'Sitemap index', 'LCP < 1.2s', 'Keyword cluster', 'INP 38ms', 'Indexing active'][i % 6] : null,
        accent: i % 4 === 0,
        emerald: i % 7 === 0
      });
    }

    let mouse = { x: -1000, y: -1000, ripple: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleCanvasClick = () => {
      mouse.ripple = 1;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleCanvasClick);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid
      ctx.strokeStyle = theme === 'dark' ? 'rgba(6, 182, 212, 0.05)' : 'rgba(6, 182, 212, 0.03)';
      ctx.lineWidth = 0.75;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw mouse ripple effect
      if (mouse.ripple > 0) {
        mouse.ripple += 1.8;
        if (mouse.ripple > 80) mouse.ripple = 0;
        
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.ripple, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - mouse.ripple / 80) * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw dual rising organic growth trajectories (Projection bounds)
      // Upper curve (Growth target)
      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? 'rgba(16, 185, 129, 0.22)' : 'rgba(16, 185, 129, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.moveTo(0, height * 0.85);
      for (let x = 0; x <= width; x += 15) {
        const progress = x / width;
        const curveY = height * 0.85 - Math.pow(progress, 1.8) * (height * 0.6) + Math.sin(x * 0.012 + time) * 6;
        ctx.lineTo(x, curveY);
      }
      ctx.stroke();

      // Lower/Core curve (Average Organic Trend)
      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? 'rgba(6, 182, 212, 0.35)' : 'rgba(6, 182, 212, 0.25)';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([]);
      ctx.moveTo(0, height * 0.88);
      for (let x = 0; x <= width; x += 10) {
        const progress = x / width;
        const curveY = height * 0.88 - Math.pow(progress, 1.9) * (height * 0.62) + Math.cos(x * 0.01 + time) * 8;
        ctx.lineTo(x, curveY);
      }
      ctx.stroke();

      // Update and draw nodes & connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce borders
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse repelling physics
        if (mouse.x > -500) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            node.x -= (dx / dist) * force * 2.2;
            node.y -= (dy / dist) * force * 2.2;
          }
        }

        // Draw node inter-connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = other.x - node.x;
          const ndy = other.y - node.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
          if (nDist < 95) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const alpha = (1 - nDist / 95) * 0.25;
            
            if (node.accent || other.accent) {
              ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 1.2})`;
            } else if (node.emerald || other.emerald) {
              ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 1.2})`;
            } else {
              ctx.strokeStyle = theme === 'dark' ? `rgba(255, 255, 255, ${alpha * 0.4})` : `rgba(0, 0, 0, ${alpha * 0.4})`;
            }
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw node node point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        
        // Glow styling
        if (node.accent) {
          ctx.fillStyle = '#06B6D4'; // cyan-500
          ctx.shadowColor = '#06B6D4';
          ctx.shadowBlur = theme === 'dark' ? 10 : 5;
        } else if (node.emerald) {
          ctx.fillStyle = '#10B981'; // emerald-500
          ctx.shadowColor = '#10B981';
          ctx.shadowBlur = theme === 'dark' ? 10 : 5;
        } else {
          ctx.fillStyle = theme === 'dark' ? '#475569' : '#94A3B8';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for text/lines

        // Node labels
        if (node.label && width > 420) {
          ctx.font = '500 9px "JetBrains Mono", monospace';
          ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.55)' : 'rgba(15, 23, 42, 0.65)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[380px] lg:h-[520px] rounded-2xl overflow-hidden glass-card border border-border/80 group shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-pointer bg-slate-950/20 dark:bg-black/20" />
      
      {/* Proprietary HUD Overlay Elements */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border/80 text-[10px] font-mono font-bold text-accent shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        LIVE ORGANIC CRAWL MATRIX
      </div>

      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-3 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border/80 text-[10px] font-mono text-secondary shadow-sm">
        <span>INDEXING: <strong className="text-emerald-500 dark:text-emerald-400">99.8%</strong></span>
        <span className="text-slate-300 dark:text-slate-700">|</span>
        <span>CV SCORE: <strong className="text-accent">98/100</strong></span>
      </div>

      {/* Floating HUD metrics */}
      <div className="absolute bottom-6 left-6 z-10 max-w-[240px] bg-surface/90 backdrop-blur-lg p-3.5 rounded-xl border border-border/85 shadow-2xl text-left hidden sm:block">
        <div className="text-[10px] font-mono font-semibold text-muted uppercase tracking-wider mb-1">QIBIXEL Growth Signal</div>
        <div className="text-sm font-semibold text-primary flex items-center justify-between">
          <span>Search Velocity</span>
          <span className="text-emerald-500 dark:text-emerald-400 font-mono text-xs font-bold">+342% YoY</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[88%]" />
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden md:block bg-surface/90 backdrop-blur-lg px-4 py-2.5 rounded-xl border border-border/85 text-right font-mono text-[10px] text-secondary shadow-2xl">
        <div className="text-accent font-bold">QIBIXEL NODE ENGINE</div>
        <div className="text-[9px] text-muted">Autonomous Rank Optimization</div>
      </div>
    </div>
  );
}
