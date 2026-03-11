import { useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const useScrollReveal = () => {
  useEffect(() => {
    if (prefersReducedMotion()) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => {
      const delay = el.getAttribute('data-reveal-delay');
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;