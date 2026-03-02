import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Crown } from 'lucide-react';
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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
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
    <div className="space-y-2">
      <AnimatePresence mode="popLayout">
        {sorted.map((player, i) => {
          const isMe = player.sessionId === sessionId;

          return (
            <motion.div
              key={player.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                layout: { type: 'spring', stiffness: 500, damping: 35 },
                delay: i * 0.05,
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                isMe
                  ? 'glass border-2 border-primary/50 animate-glow-border'
                  : 'glass border border-border/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  layout
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                    i === 0
                      ? 'bg-quiz-yellow/20 text-quiz-yellow'
                      : i === 1
                      ? 'bg-muted-foreground/20 text-muted-foreground'
                      : i === 2
                      ? 'bg-quiz-red/20 text-quiz-red'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {i < 3 ? medals[i] : i + 1}
                </motion.span>
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">{player.name}</span>
                  {player.isHost && (
                    <Crown className="w-3.5 h-3.5 text-quiz-yellow" />
                  )}
                  {isMe && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
                      YOU
                    </span>
                  )}
                </div>
              </div>
              <motion.div
                key={player.score}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 0.3 }}
                className="font-mono font-bold text-primary text-lg"
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
