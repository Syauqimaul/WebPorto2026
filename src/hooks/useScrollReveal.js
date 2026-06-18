import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies scroll-reveal animation using IntersectionObserver.
 * Returns a ref to attach to the element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return ref;
}

/**
 * Hook to observe multiple elements for reveal animation.
 * Call this once at the App level.
 */
export function useScrollRevealAll() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const skillCards = document.querySelectorAll('.skill-category');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      }
    );

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            skillObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    reveals.forEach((el) => revealObserver.observe(el));
    skillCards.forEach((card) => skillObserver.observe(card));

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);
}
