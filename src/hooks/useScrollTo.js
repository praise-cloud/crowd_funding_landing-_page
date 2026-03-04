import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL hash without triggering page reload
      window.history.pushState(null, null, `#${sectionId}`);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Clear URL hash when scrolling to top
    window.history.pushState(null, null, window.location.pathname);
  }, []);

  return {
    scrollToSection,
    scrollToTop
  };
};