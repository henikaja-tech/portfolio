// Variantes Framer Motion partagées, en remplacement de la librairie AOS.
// `fadeUp` reproduit l'animation data-aos="fade-up" d'origine :
// opacity 0 -> 1 et translateY(30px) -> 0 sur 0.6s.
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Permet de reproduire l'effet de vague : chaque carte d'une même ligne
// démarre avec 100ms de décalage supplémentaire par rapport à la précédente.
export const fadeUpStagger = (index, base = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: base + index * 0.1 },
  },
});

// Props par défaut pour déclencher l'animation une seule fois à l'entrée dans le viewport
// (équivalent de data-aos-once="true").
export const viewportOnce = { once: true, amount: 0.2 };
