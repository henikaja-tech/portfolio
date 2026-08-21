import { useEffect, useState } from 'react';

const COLORS = ['#4453f0', '#22b8a0', '#f0862e', '#ef4444', '#a08c34'];

/**
 * Reproduit le cycle de couleurs (logo, nom, texte animé) de la version
 * vanilla JS : une nouvelle couleur de la palette toutes les 2200ms.
 */
export function useAccentCycle(intervalMs = 2200) {
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      idx = (idx + 1) % COLORS.length;
      setColor(COLORS[idx]);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return color;
}
