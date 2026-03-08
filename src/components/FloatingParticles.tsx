import { motion } from 'framer-motion';
import { useMemo } from 'react';

const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.8,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/15"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 24 - 12, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Large ambient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[160px] bg-primary/8"
        style={{ top: '-5%', left: '10%' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[140px] bg-accent/6"
        style={{ bottom: '5%', right: '5%' }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[120px] bg-neon-purple/5"
        style={{ top: '40%', right: '20%' }}
        animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
    </div>
  );
};

export default FloatingParticles;
