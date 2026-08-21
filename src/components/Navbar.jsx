import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useAccentCycle } from '../hooks/useAccentCycle';

const LINKS = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À Propos' },
  { id: 'formations', label: 'Mes Formations' },
  { id: 'skills', label: 'Mes Compétences' },
  { id: 'projects', label: 'Mes Projets' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ isDark, toggleTheme, scrolled, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const accentColor = useAccentCycle();

  const NavLink = ({ id, label, mobile }) => (
    <a
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`relative whitespace-nowrap font-medium transition-colors ${
        mobile
          ? 'block border-b border-border px-6 py-4 text-[15px] hover:bg-surface-2 sm:px-10'
          : 'py-1.5 text-[14.5px]'
      } ${
        activeSection === id
          ? 'text-primary after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:rounded after:bg-primary'
          : 'text-text-mut hover:text-primary'
      }`}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[200] border-b border-border bg-bg/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_8px_24px_-14px_rgba(20,28,58,.18)] dark:shadow-[0_8px_24px_-14px_rgba(0,0,0,.5)]' : ''
      }`}
    >
      <nav className="mx-auto grid h-[76px] max-w-none grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 md:px-10">
        <a href="#hero" className="logo justify-self-start font-display text-[clamp(1.1rem,4vw,1.7rem)] font-extrabold leading-tight">
          <span style={{ color: accentColor, transition: 'color .6s ease' }}>Henikaja</span>
          <span className="block font-body text-xs font-semibold tracking-[0.1em] text-text-faint sm:text-sm sm:tracking-[0.12em]">
            ANDRIANIRINA
          </span>
        </a>

        <div className="hidden items-center gap-9 justify-self-center md:flex">
          {LINKS.map((l) => (
            <NavLink key={l.id} {...l} />
          ))}
        </div>

        <div className="flex items-center gap-2 justify-self-end sm:gap-3.5">
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-[13px] font-semibold text-text-mut transition hover:border-primary hover:text-primary sm:px-4 sm:py-2.5"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
            <span className="hidden sm:inline">Thème</span>
          </button>
          <a
            href="#contact"
            className="btn-shine hidden rounded-[10px] bg-primary px-[22px] py-3 text-sm font-bold text-white shadow-[0_8px_18px_-6px_rgba(68,83,240,.45)] transition hover:brightness-110 active:scale-[.97] sm:inline-block"
          >
            Contactez-moi
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[9px] border border-border bg-surface md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            {LINKS.map((l) => (
              <NavLink key={l.id} {...l} mobile />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
