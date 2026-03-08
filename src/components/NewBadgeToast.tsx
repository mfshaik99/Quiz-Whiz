import { motion } from 'framer-motion';
import type { Badge } from '@/lib/gamification';

interface Props {
  badge: Badge;
  onClose: () => void;
}

const NewBadgeToast = ({ badge, onClose }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass-premium rounded-2xl p-5 flex items-center gap-4 shadow-elevated cursor-pointer gradient-border"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        className="w-13 h-13 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center"
      >
        <span className="text-3xl">{badge.icon}</span>
      </motion.div>
      <div>
        <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-0.5">Badge Unlocked!</p>
        <p className="font-display font-bold text-foreground text-base">{badge.name}</p>
        <p className="text-[11px] text-muted-foreground">{badge.description}</p>
      </div>
    </motion.div>
  );
};

export default NewBadgeToast;
