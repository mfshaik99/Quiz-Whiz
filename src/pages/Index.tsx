import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Users, Trophy, Award, BookOpen, ArrowRight, Brain, Timer, BarChart3, User, Sparkles, ChevronRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import PlayerStats from '@/components/PlayerStats';
import BadgeShowcase from '@/components/BadgeShowcase';
import FloatingParticles from '@/components/FloatingParticles';
import Logo from '@/components/Logo';
import { useGamification } from '@/lib/gamification';
import { useAuth } from '@/hooks/useAuth';
import { TOPICS } from '@/data/questions';

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } } };

const Index = () => {
  const navigate = useNavigate();
  const checkStreak = useGamification(s => s.checkStreak);
  const quizzesPlayed = useGamification(s => s.quizzesPlayed);
  const { user, profile } = useAuth();

  useEffect(() => { checkStreak(); }, []);

  return (
    <div className="min-h-screen bg-gradient-mesh relative overflow-hidden">
      <FloatingParticles />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <Logo size="sm" />
        <div className="flex items-center gap-2.5">
          {user ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm font-medium text-foreground"
            >
              <User className="w-4 h-4 text-primary" />
              {profile?.display_name || 'Dashboard'}
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/auth')}
              className="px-4 py-2.5 rounded-xl glass-card text-sm font-medium text-foreground hover:border-primary/20 transition-colors"
            >
              Sign In
            </motion.button>
          )}
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center px-4 pt-10 pb-20 sm:pt-16 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-muted-foreground">
              {user ? `Welcome, ${profile?.display_name}` : 'Free · No signup · Play instantly'}
            </span>
          </motion.div>

          <Logo size="xl" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-base sm:text-lg text-muted-foreground mt-6 mb-12 max-w-lg mx-auto leading-relaxed"
          >
            The ultimate quiz platform. Pick a topic, challenge yourself, and climb the global leaderboard.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/solo')}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-neon-purple text-primary-foreground font-display font-semibold text-lg shadow-glow-primary flex items-center justify-center gap-3 transition-all btn-ripple"
            >
              <BookOpen className="w-5 h-5" />
              Start Playing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/create')}
              className="px-8 py-4 rounded-2xl glass-premium text-foreground font-display font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:border-primary/20"
            >
              <Zap className="w-5 h-5 text-primary" />
              Create Quiz
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/join')}
              className="px-8 py-4 rounded-2xl glass-premium text-foreground font-display font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:border-accent/20"
            >
              <Users className="w-5 h-5 text-accent" />
              Join Quiz
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats ribbon */}
      <section className="relative z-10 px-4 pb-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4"
        >
          {[
            { value: '550+', label: 'Questions', icon: Brain },
            { value: '10', label: 'Topics', icon: BookOpen },
            { value: '∞', label: 'Free Plays', icon: Sparkles },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2.5" />
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Topics */}
      <section className="relative z-10 px-4 pb-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Explore <span className="text-gradient">Topics</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Pick your area of expertise and prove your knowledge
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-3"
        >
          {TOPICS.map((topic) => (
            <motion.button
              key={topic.id}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate(`/solo/setup/${topic.id}`)}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center card-lift group"
            >
              <span className="text-3xl sm:text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300">{topic.icon}</span>
              <span className="text-xs font-semibold text-foreground">{topic.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-4 pb-20 max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: Brain, title: 'Smart Questions', desc: 'Curated questions with difficulty levels and explanations.', color: 'text-primary' },
            { icon: Timer, title: 'Timed Challenges', desc: 'Race against the clock. Faster answers earn more points.', color: 'text-neon-cyan' },
            { icon: Trophy, title: 'Global Leaderboard', desc: 'Compete worldwide. Scores persist across sessions.', color: 'text-gold' },
            { icon: Award, title: 'Badges & XP', desc: 'Unlock achievements, earn XP, and level up.', color: 'text-neon-purple' },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/80 flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-shadow">
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1.5 text-[15px]">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gamification */}
      {quizzesPlayed > 0 && (
        <section className="relative z-10 pb-20 px-4 flex flex-col items-center gap-6">
          <PlayerStats />
          <BadgeShowcase />
        </section>
      )}

      <footer className="relative z-10 text-center pb-6 text-[11px] text-muted-foreground/60 tracking-wide">
        Built with ♥ by Smart Minds · QuizWhiz
      </footer>
    </div>
  );
};

export default Index;
