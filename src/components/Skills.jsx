import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, viewportOnce } from '../motionVariants';
import { marqueeRowRight, marqueeRowLeft, domainCards } from '../data/skills';
import MarqueeRow from './MarqueeRow';
import DomainCard from './DomainCard';

// La grille de cartes de compétences affiche 4 colonnes sur desktop :
// le délai de cascade est donc réinitialisé (0/100/200/300ms) à chaque
// nouvelle ligne de 4 éléments, comme demandé.
const COLS = 4;

export default function Skills({ isDark }) {
  return (
    <section id="skills" className="mx-auto max-w-[1100px] px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-9">
      <motion.div
        className="mx-auto mb-7 max-w-[640px] text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="mb-3.5 block text-[12.5px] font-bold uppercase tracking-[0.14em] text-text-faint">
          Boîte à outils
        </span>
        <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-extrabold">
          Mes <span className="text-cyan">Compétences</span>
        </h2>
        <p className="text-base text-text-mut">De l'infrastructure réseau au code applicatif.</p>
      </motion.div>

      <motion.div
        className="mb-9"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <MarqueeRow items={marqueeRowRight} direction="left" />
        <MarqueeRow items={marqueeRowLeft} direction="right" />
      </motion.div>

      <motion.div
        className="mb-[34px] text-center text-[12.5px] font-bold uppercase tracking-[0.14em] text-text-faint"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        Détail par domaine
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {domainCards.map((card, i) => (
          <motion.div
            key={card.key}
            variants={fadeUpStagger(i % COLS)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <DomainCard card={card} isDark={isDark} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
