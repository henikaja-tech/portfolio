import { motion } from 'framer-motion';

export default function ScrollProgress({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[300] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-cyan"
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
}
