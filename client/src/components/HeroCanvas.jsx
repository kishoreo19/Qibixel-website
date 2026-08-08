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
    const nodeCount = 32;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 2,
        label: i % 4 === 0 ? ['#1 Rank', 'Index 200', 'Core Vitals', 'Intent Node'][i % 4] : null,
        accent: i % 3 === 0
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid
      ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
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

      // Draw dynamic rising trajectory line (SEO Organic Growth curve)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
      ctx.lineWidth = 3;
      ctx.setLineDash([6, 6]);
      ctx.moveTo(0, height * 0.8);
      for (let x = 0; x <= width; x += 10) {
        const progress = x / width;
        const curveY = height * 0.8 - Math.pow(progress, 1.8) * (height * 0.55) + Math.sin(x * 0.01 + time) * 8;
        ctx.lineTo(x, curveY);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Update and draw nodes & connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction force
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          node.x -= (dx / dist) * 1.5;
          node.y -= (dy / dist) * 1.5;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = other.x - node.x;
          const ndy = other.y - node.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
          if (nDist < 110) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const alpha = (1 - nDist / 110) * 0.3;
            ctx.strokeStyle = node.accent || other.accent ? `rgba(6, 182, 212, ${alpha})` : (theme === 'dark' ? `rgba(255, 255, 255, ${alpha * 0.5})` : `rgba(0, 0, 0, ${alpha * 0.5})`);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node points
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        if (node.accent) {
          ctx.fillStyle = '#06B6D4';
          ctx.shadowColor = '#06B6D4';
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = '#94A3B8';
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        // Node labels
        if (node.label && width > 480) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
          ctx.fillText(node.label, node.x + 8, node.y + 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[400px] lg:h-[540px] rounded-2xl overflow-hidden glass-card border border-border group">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />
      
      {/* Proprietary HUD Overlay Elements */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-accent">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        LIVE ORGANIC CRAWL MATRIX
      </div>

      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-3 bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-secondary">
        <span>INDEXING: <strong className="text-emerald-600 dark:text-emerald-400">99.8%</strong></span>
        <span className="text-slate-300 dark:text-slate-700">|</span>
        <span>CV SCORE: <strong className="text-accent">98/100</strong></span>
      </div>

      {/* Floating HUD metrics */}
      <div className="absolute bottom-6 left-6 z-10 max-w-[240px] bg-surface/85 backdrop-blur-md p-3.5 rounded-xl border border-border shadow-2xl text-left hidden sm:block">
        <div className="text-[11px] font-mono text-muted uppercase tracking-wider mb-1">QIBIXEL Growth Signal</div>
        <div className="text-sm font-semibold text-primary flex items-center justify-between">
          <span>Search Velocity</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">+342% YoY</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[88%]" />
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden md:block bg-surface/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border text-right font-mono text-xs text-secondary">
        <div className="text-accent font-bold">QIBIXEL NODE ENGINE</div>
        <div className="text-[10px] text-muted">Autonomous Rank Optimization</div>
      </div>
    </div>
  );
}
