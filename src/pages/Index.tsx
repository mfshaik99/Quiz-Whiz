import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Users, Trophy, ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Real-time competitive quizzing</span>
        </motion.div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight">
          Quiz<span className="text-gradient">Whiz</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-md mx-auto">
          Create quizzes, challenge friends, and compete in real-time. Fast, fun, and free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/create')}
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg glow-primary flex items-center justify-center gap-2 transition-colors"
          >
            <Zap className="w-5 h-5" />
            Create Quiz
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/join')}
            className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-display font-semibold text-lg border border-border hover:border-primary/50 flex items-center justify-center gap-2 transition-colors"
          >
            <Users className="w-5 h-5" />
            Join Quiz
          </motion.button>
        </div>
      </motion.div>

      {/* Feature cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 max-w-3xl w-full"
      >
        {[
          { icon: Zap, title: 'Instant Play', desc: 'No signup needed. Just a name and a code.' },
          { icon: Trophy, title: 'Live Scoring', desc: 'Faster answers earn more points.' },
          { icon: Users, title: 'Multiplayer', desc: 'Compete with friends in real-time.' },
        ].map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
            <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Index;
