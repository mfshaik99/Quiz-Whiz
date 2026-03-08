import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Gamepad2, Shield, Trophy, BarChart3, Zap, ArrowRight } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

const Welcome = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) navigate('/home');
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-mesh flex items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-primary/20 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-mesh relative overflow-hidden flex flex-col">
      <FloatingParticles />

      <nav className="relative z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <Logo size="sm" />
        <ThemeToggle />
      </nav>

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">The Ultimate Quiz Experience</span>
          </motion.div>

          <Logo size="xl" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mt-6 mb-14 max-w-lg mx-auto leading-relaxed"
          >
            Challenge yourself across 10 topics, earn XP, unlock badges, and climb the global leaderboard.
          </motion.p>

          {/* Two entry cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto"
          >
            {/* Create Account */}
            <motion.button
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/auth')}
              className="glass-premium rounded-2xl p-6 text-left card-lift group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-premium">
                  <UserPlus className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Create Account</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Save progress, track history, earn achievements & compete globally.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Trophy, label: 'Leaderboard' },
                    { icon: BarChart3, label: 'History' },
                    { icon: Shield, label: 'Save Progress' },
                  ].map(f => (
                    <span key={f.label} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
                      <f.icon className="w-3 h-3" /> {f.label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-4 text-primary text-sm font-semibold">
                  Sign up free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>

            {/* Play as Guest */}
            <motion.button
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/home')}
              className="glass-premium rounded-2xl p-6 text-left card-lift group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-neon-cyan flex items-center justify-center mb-4 shadow-premium">
                  <Gamepad2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Play as Guest</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Jump in instantly. No signup required. Just pick a topic and start!
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Zap, label: 'Instant Play' },
                    { icon: Gamepad2, label: 'All Topics' },
                  ].map(f => (
                    <span key={f.label} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
                      <f.icon className="w-3 h-3" /> {f.label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold">
                  Play now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <footer className="relative z-10 text-center pb-8 text-xs text-muted-foreground">
        Built with ♥ by Smart Minds · QuizWhiz
      </footer>
    </div>
  );
};

export default Welcome;
