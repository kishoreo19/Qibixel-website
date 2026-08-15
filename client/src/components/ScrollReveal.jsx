import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Triggers entrance animations when elements enter viewport.
 * Works seamlessly during BOTH scroll-down and scroll-up movements.
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'flip' | 'blur' | 'auto'
  delay = 0,
  duration = 700,
  className = '',
  once = false, // Set false by default to animate on both scroll-down and scroll-up
  threshold = 0.12,
  as: Component = 'div',
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Detect scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          // Reset when scrolled past so it re-animates when scrolling back (down or up)
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [once, threshold]);

  // Determine animation variant based on scroll direction if variant === 'auto'
  let activeVariant = variant;
  if (variant === 'auto') {
    activeVariant = scrollDirection === 'up' ? 'fade-down' : 'fade-up';
  }

  const variantClasses = {
    'fade-up': 'reveal-fade-up',
    'fade-down': 'reveal-fade-down',
    'fade-left': 'reveal-fade-left',
    'fade-right': 'reveal-fade-right',
    'scale-up': 'reveal-scale-up',
    flip: 'reveal-flip',
    blur: 'reveal-blur',
  };

  const animationClass = variantClasses[activeVariant] || 'reveal-fade-up';

  return (
    <Component
      ref={ref}
      className={`reveal-on-scroll ${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
