import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useAccentCycle } from '../hooks/useAccentCycle';

const ROLES = [
  'Administrateur Réseaux & Systèmes | Linux · Cisco · LDAP',
  'Développeur Full-Stack | PHP · Laravel · Vue.js',
  'Infrastructure Serveur | Apache2 · DNS · Messagerie',
  'Réseaux avancés | RIP v2 · OSPF · GNS3',
];

export default function Hero() {
  const typedText = useTypewriter(ROLES);
  const accentColor = useAccentCycle();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-6 pt-[76px] text-center sm:px-6 md:px-8"
    >
      {/* halo radial en fond, identique à .hero::before */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-160px] -z-10 h-[560px] w-[900px] -translate-x-1/2 opacity-70 dark:opacity-50"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--primary) 16%, transparent), transparent 68%)',
        }}
      />

      <div className="relative mx-auto mb-4 h-[clamp(200px,27vh,280px)] w-[clamp(200px,27vh,280px)] sm:mb-5">
        <div className="h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-primary to-cyan shadow-[0_0_0_6px_var(--surface),0_0_40px_-6px_rgba(68,83,240,.5)]">
          <img
            src="/images/profile.jpg"
            alt="Henikaja David Andrianirina"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -right-2.5 -top-2.5 h-[22px] w-[22px] border-t-2 border-r-2 border-primary" />
        <div className="absolute -bottom-2.5 -left-2.5 h-[22px] w-[22px] border-b-2 border-l-2 border-primary" />
      </div>

      <div className="mb-2 inline-flex items-center gap-2.5 rounded-full bg-green/10 px-[18px] py-1.5 text-[13.5px] font-semibold text-green sm:mb-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
        </span>
        Disponible pour un stage — Administrateur Réseau &amp; Systèmes
      </div>

      <h1 className="mb-1.5 break-words font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-primary">
        Henikaja David
        <br />
        <span style={{ color: accentColor, transition: 'color .6s ease' }}>ANDRIANIRINA</span>
      </h1>

      <p className="mb-3 min-h-[26px] font-mono text-[17px] font-semibold text-text-mut">
        <span className="text-primary">&gt;</span>{' '}
        <span className="text-primary">
          {typedText}
          <span className="typed-cursor h-[1em] align-middle" />
        </span>
      </p>

      <p className="mx-auto mb-4 max-w-[680px] text-[18px] text-text-mut sm:mb-5">
        Étudiant en L2 Réseaux &amp; Systèmes —{' '}
        <a href="#about" className="font-semibold text-primary">
          infrastructures Linux, routage Cisco et applications web
        </a>
        . Je conçois des systèmes qui tiennent debout, du câblage jusqu'à l'interface utilisateur.
        {' '}
        <span className="font-semibold text-text">
          Disponible pour un stage de 3 mois à partir du 15 septembre 2026.
        </span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.a
          href="#skills"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-shine inline-flex h-[54px] items-center justify-center rounded-full bg-primary px-10 text-[15px] font-extrabold text-white shadow-[0_14px_30px_-10px_rgba(68,83,240,.65)] transition-colors hover:bg-primary-d"
        >
          Voir mes compétences
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex h-[54px] w-[190px] items-center justify-center overflow-hidden rounded-full border border-border bg-gradient-to-b from-surface-2 to-border text-[15px] font-extrabold text-text shadow-[inset_0_2px_4px_rgba(0,0,0,.08),0_10px_22px_-8px_rgba(30,41,86,.3)]"
        >
          <span className="absolute left-1.5 top-1.5 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-surface to-surface-2 shadow-md transition-transform duration-300 group-hover:translate-x-[126px]">
            <Download size={16} strokeWidth={2.5} className="text-primary" />
          </span>
          <span className="relative z-[1] ml-5">Mon CV</span>
        </motion.a>
      </div>
    </section>
  );
}
