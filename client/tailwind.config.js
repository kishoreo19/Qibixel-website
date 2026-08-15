/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
          glow: 'rgb(var(--color-accent-glow) / <alpha-value>)',
        },
        emerald: {
          DEFAULT: 'rgb(var(--color-emerald) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['"Share Tech Mono"', '"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'Syne', 'Outfit', 'sans-serif'],
        tech: ['"Share Tech Mono"', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(140, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(140, 255, 0, 0.05) 1px, transparent 1px)",
        'grid-pattern-light': "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
        'cyan-glow': "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(140, 255, 0, 0.15), transparent 40%)",
        'lime-glow': "radial-gradient(800px circle at 50% 30%, rgba(140, 255, 0, 0.15), transparent 60%)"
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'ping-slow': 'pingSlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pingSlow: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.08)', opacity: '0.3' },
          '100%': { transform: 'scale(0.95)', opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
