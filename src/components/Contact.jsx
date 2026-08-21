import { motion } from 'framer-motion';
import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react';
import { fadeUp, viewportOnce } from '../motionVariants';

const CONTACTS = [
  {
    key: 'wa',
    href: 'https://wa.me/261385650185',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+261 38 56 501 85',
    bg: 'bg-[#dcf7e3] dark:bg-[#123a2a]',
    color: 'text-[#1fb579]',
  },
  {
    key: 'em',
    href: 'mailto:henikajaandria309@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'henikajaandria309@gmail.com',
    bg: 'bg-[#fde3e3] dark:bg-[#3a1e1e]',
    color: 'text-[#d64545]',
  },
  {
    key: 'li',
    href: 'https://www.linkedin.com/in/henikaja-david-andrianirina-2b7772428/',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Henikaja David Andrianirina',
    bg: 'bg-[#dbe8ff] dark:bg-[#16264a]',
    color: 'text-[#2563eb]',
  },
  {
    key: 'gh',
    href: 'https://github.com/henikaja-tech',
    icon: Github,
    label: 'GitHub',
    value: 'henikaja-tech',
    bg: 'bg-[#e7eaf3] dark:bg-[#2a3145]',
    color: 'text-[#1a2233] dark:text-white',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1140px] px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-9">
      <motion.div
        className="mx-auto mb-7 max-w-[640px] text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="mb-3.5 block text-[12.5px] font-bold uppercase tracking-[0.14em] text-text-faint">
          Restons en contact
        </span>
        <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-extrabold">
          Contacter <span className="text-green">Moi</span>
        </h2>
        <p className="text-base text-text-mut">
          Réseaux, infrastructure, applications web — discutons de votre prochain projet.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.8fr]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="rounded-[18px] border border-border bg-surface p-[34px] shadow-card">
          <h4 className="mb-[22px] font-display text-[17px] font-bold text-primary">Mes coordonnées</h4>
          {CONTACTS.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.key}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border-b border-border px-3 py-3.5 transition-all duration-300 last:border-none hover:scale-[1.04] hover:bg-surface-2 hover:shadow-md hover:-translate-y-0.5"
              >
                <span
                  className={`flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${c.bg} ${c.color}`}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <div className="text-xs text-text-faint">{c.label}</div>
                  <div className="text-[14.5px] font-bold text-text">{c.value}</div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[18px] border border-border shadow-card transition-transform duration-300 hover:scale-[1.03] lg:max-w-none">
          <img
            src="/images/profile.jpg"
            alt="Henikaja David Andrianirina"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
