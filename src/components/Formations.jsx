import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, viewportOnce } from '../motionVariants';

const CARDS = [
  {
    title: 'Réseaux & Systèmes',
    sub: 'ENI Fianarantsoa',
    text: "Actuellement en L2, formation orientée vers l'administration systèmes, les réseaux informatiques et le développement logiciel.",
  },
  {
    title: 'Administration Systèmes & Réseaux',
    sub: 'Spray Info — Fianarantsoa · 2 mois',
    text: 'Mise en place de services serveur sur Ubuntu Server et Windows Server, en environnement pratique.',
  },
];

const SERVICES = [
  'DNS', 'HTTP', 'HTTPS', 'Samba', 'DHCP', 'FTP', 'FTPS', 'pfSense', 'Routeur',
  'Active Directory (Windows Server)',
];

const CardShell = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl border border-border bg-surface p-[30px] shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,.15)] ${className}`}
  >
    {children}
  </div>
);

export default function Formations() {
  return (
    <section id="formations" className="mx-auto max-w-[1140px] px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-9">
      <motion.div
        className="mx-auto mb-7 max-w-[640px] text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-extrabold">
          Mes <span className="text-primary">Formations</span>
        </h2>
        <p className="text-base text-text-mut">Formation orientée réseaux, systèmes et développement logiciel.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUpStagger(i)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <CardShell>
              <h4 className="mb-1.5 text-center font-display text-lg font-bold">{c.title}</h4>
              <div className="mb-3.5 text-center text-[13.5px] font-semibold text-primary">{c.sub}</div>
              <p className="text-center text-[14.5px] text-text-mut">{c.text}</p>
            </CardShell>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <CardShell>
          <h4 className="text-center font-display text-lg font-bold">Services mis en place pendant la formation</h4>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="rounded-2xl border border-transparent px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5"
                style={{ background: 'var(--surface-2)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </CardShell>
      </motion.div>
    </section>
  );
}
