import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuizStore } from '@/lib/quiz-store';
import AnimatedLeaderboard from '@/components/AnimatedLeaderboard';
import confetti from 'canvas-confetti';
import { Trophy, Home, RotateCcw, Crown, Sparkles } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const quiz = useQuizStore(s => s.quiz);
  const sessionId = useQuizStore(s => s.sessionId);
  const fetchQuiz = useQuizStore(s => s.fetchQuiz);
  const getLeaderboard = useQuizStore(s => s.getLeaderboard);

  useEffect(() => {
    if (code) fetchQuiz(code);
  }, [code]);

  const leaderboard = getLeaderboard();
  const winner = leaderboard[0];

  useEffect(() => {
    if (!winner) return;
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#a855f7', '#22d3ee', '#fbbf24'] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#a855f7', '#22d3ee', '#fbbf24'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [winner]);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-background bg-particles flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-secondary animate-pulse" />
          <div className="w-48 h-4 rounded-full bg-secondary animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background bg-particles flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
          </motion.div>
          <h1 className="font-display text-4xl font-bold mb-2">
            <span className="text-gradient">Final Results</span>
          </h1>
          <p className="text-muted-foreground">{quiz.title}</p>
        </div>

        {/* Winner spotlight */}
        {winner && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="glass-strong border-2 border-primary/40 rounded-2xl p-8 text-center mb-8 glow-primary relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
            <div className="relative z-10">
              <Crown className="w-10 h-10 text-quiz-yellow mx-auto mb-2" />
              <Sparkles className="w-5 h-5 text-quiz-yellow mx-auto mb-1 opacity-60" />
              <h2 className="font-display text-3xl font-bold text-gradient-neon mb-1">{winner.name}</h2>
              <motion.p
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="font-mono text-3xl font-bold text-primary"
              >
                {winner.score} pts
              </motion.p>
              <p className="text-sm text-muted-foreground mt-1">🏆 Champion!</p>
            </div>
          </motion.div>
        )}

        {/* Full leaderboard */}
        <AnimatedLeaderboard players={quiz.players} sessionId={sessionId} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3 justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-xl glass text-foreground font-display font-semibold flex items-center gap-2 hover:bg-secondary/80 transition-colors"
          >
            <Home className="w-4 h-4" /> Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/create')}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold flex items-center gap-2 glow-primary"
          >
            <RotateCcw className="w-4 h-4" /> New Quiz
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Results;
