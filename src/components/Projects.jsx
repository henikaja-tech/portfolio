import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, fadeUpStagger, viewportOnce } from '../motionVariants';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const carouselRef = useRef(null);

  const scrollByCard = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > div');
    const width = (card?.offsetWidth ?? 360) + 24;
    el.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="mx-auto max-w-[1140px] px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-9">
      <motion.div
        className="mx-auto mb-7 max-w-[640px] text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="mb-3.5 block text-[12.5px] font-bold uppercase tracking-[0.14em] text-text-faint">
          Réalisations
        </span>
        <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-extrabold">
          Mes <span className="text-green">Projets</span>
        </h2>
        <p className="text-base text-text-mut">
          Réalisations concrètes alliant infrastructure réseau et développement d'applications.
        </p>
      </motion.div>

      <div className="relative mb-10">
        <div
          ref={carouselRef}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-2.5"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUpStagger(i)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-[-22px] top-1/2 z-[5] flex -translate-y-1/2 justify-between">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Précédent"
            className="pointer-events-auto flex h-[46px] w-[46px] items-center justify-center rounded-full border border-border bg-surface text-text shadow-[0_8px_24px_-6px_rgba(30,41,86,.35)] transition hover:scale-105 hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Suivant"
            className="pointer-events-auto flex h-[46px] w-[46px] items-center justify-center rounded-full border border-border bg-surface text-text shadow-[0_8px_24px_-6px_rgba(30,41,86,.35)] transition hover:scale-105 hover:border-primary hover:text-primary"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
