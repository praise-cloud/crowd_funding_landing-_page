import { useCallback } from 'react';

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const startY = window.scrollY || window.pageYOffset;
    const targetY = element.getBoundingClientRect().top + startY - 40;
    const distance = targetY - startY;
    const duration = 900;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
    window.history.pushState(null, null, `#${sectionId}`);
  }, []);

  const scrollToTop = useCallback(() => {
    const startY = window.scrollY || window.pageYOffset;
    const duration = 800;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY * (1 - eased));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
    window.history.pushState(null, null, window.location.pathname);
  }, []);

  return {
    scrollToSection,
    scrollToTop
  };
};