import { useRef } from 'react';

/**
 * Reproduit l'effet de tilt 3D au mousemove (rotateX/rotateY) utilisé sur
 * l'avatar du hero et les cartes projets dans la version vanilla JS.
 * `strength` contrôle l'intensité de la rotation en degrés.
 */
export function useTilt(strength = 14) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    el.style.transform = `perspective(700px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(700px) rotateY(0) rotateX(0)';
  };

  return { ref, onMouseMove, onMouseLeave };
}
