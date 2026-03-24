
import { motion, AnimatePresence } from 'framer-motion';
import { Crown } from 'lucide-react';
import { Player } from '@/lib/quiz-store';
import { useEffect, useState } from 'react';

interface AnimatedLeaderboardProps {
  players: Player[];
  sessionId: string;
  maxShow?: number;
}

const CountUpScore = ({ target, duration = 600 }: { target: number; duration?: number }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === 0) { setCurrent(0); return; }
    const start = performance.now();
    const startVal = current;
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(startVal + (target - startVal) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target]);

  return <span>{current}</span>;
};

const AnimatedLeaderboard = ({ players, sessionId, maxShow = 8 }: AnimatedLeaderboardProps) => {
  const sorted = [...players].sort((a, b) => b.score - a.score).slice(0, maxShow);
  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="space-y-1.5">
      <AnimatePresence mode="popLayout">
        {sorted.map((player, i) => {
          const isMe = player.sessionId === sessionId;
          return (
            <motion.div
              key={player.id}
              layout
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{
                layout: { type: 'spring', stiffness: 500, damping: 35 },
                delay: i * 0.04,
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                isMe ? 'glass-premium gradient-border' : 'glass-card'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                  i === 0 ? 'bg-gold/15 text-gold' :
                  i === 1 ? 'bg-silver/15 text-silver' :
                  i === 2 ? 'bg-bronze/15 text-bronze' :
                  'bg-secondary text-muted-foreground'
                }`}>
                  {i < 3 ? medals[i] : i + 1}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium text-sm">{player.name}</span>
                  {player.isHost && <Crown className="w-3 h-3 text-quiz-yellow" />}
                  {isMe && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/15 text-primary font-bold uppercase tracking-wide">You</span>
                  )}
                </div>
              </div>
              <motion.div
                key={player.score}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 0.3 }}
                className="font-mono font-bold text-primary text-base"
              >
                <CountUpScore target={player.score} />
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLeaderboard;
