import { useEffect, useState } from 'react';

/**
 * Calcule le pourcentage de défilement de la page, si le header doit
 * afficher son ombre ("scrolled"), et si le bouton "retour en haut"
 * doit être visible — comme l'écouteur "scroll" de la version vanilla JS.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0);
      setScrolled(h.scrollTop > 12);
      setShowBackToTop(h.scrollTop > 500);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { progress, scrolled, showBackToTop };
}
