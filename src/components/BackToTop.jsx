import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop({ show }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed right-6 bottom-6 z-[250] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_22px_-8px_rgba(68,83,240,.55)] hover:bg-primary-d"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
