import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useGamification } from '@/lib/gamification';
import FloatingParticles from '@/components/FloatingParticles';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import { Trophy, Target, Clock, Star, BookOpen, LogOut, BarChart3, Award, Flame, ChevronRight, Gamepad2 } from 'lucide-react';
import { TOPICS } from '@/data/questions';

interface QuizAttempt {
  id: string;
  topic: string;
  score: number;
  correct_answers: number;
  total_questions: number;
  time_taken_ms: number;
  created_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, profile, loading, signOut } = useAuth();
  const gamification = useGamification();
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [stats, setStats] = useState({ totalQuizzes: 0, totalScore: 0, avgAccuracy: 0, topicsPlayed: 0 });

  useEffect(() => {
    if (!loading && !user) navigate('/auth');
  }, [user, loading]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('quiz_attempts')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20)
      .then(({ data }) => {
        if (data) {
          setAttempts(data as QuizAttempt[]);
          const totalQuizzes = data.length;
          const totalScore = data.reduce((s, a) => s + (a as QuizAttempt).score, 0);
          const totalCorrect = data.reduce((s, a) => s + (a as QuizAttempt).correct_answers, 0);
          const totalQ = data.reduce((s, a) => s + (a as QuizAttempt).total_questions, 0);
          const topics = new Set(data.map((a: QuizAttempt) => a.topic));
          setStats({
            totalQuizzes,
            totalScore,
            avgAccuracy: totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0,
            topicsPlayed: topics.size,
          });
        }
      });
  }, [user]);

  if (loading || !user) {
    return <div className="min-h-screen bg-gradient-mesh flex items-center justify-center"><div className="w-12 h-12 rounded-2xl bg-primary/20 animate-pulse" /></div>;
  }

  const displayName = profile?.display_name || 'Player';

  return (
    <div className="min-h-screen bg-gradient-mesh relative overflow-hidden">
      <FloatingParticles />

      <nav className="relative z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Logo size="sm" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={async () => { await signOut(); navigate('/'); }}
            className="p-2 rounded-xl glass-premium text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </motion.button>
        </div>
      </nav>

      <div className="relative z-10 px-4 pb-16 max-w-5xl mx-auto">
        {/* Welcome header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Welcome back, <span className="text-gradient">{displayName}</span>!
          </h1>
          <p className="text-muted-foreground mt-2">Ready for another challenge?</p>
        </motion.div>

        {/* Quick play CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/solo')}
          className="w-full sm:w-auto mb-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-bold text-lg shadow-premium flex items-center gap-3"
        >
          <Gamepad2 className="w-5 h-5" /> Start a Quiz <ChevronRight className="w-4 h-4" />
        </motion.button>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {[
            { icon: BookOpen, value: stats.totalQuizzes, label: 'Quizzes Played', color: 'text-primary' },
            { icon: Trophy, value: stats.totalScore.toLocaleString(), label: 'Total Score', color: 'text-gold' },
            { icon: Target, value: `${stats.avgAccuracy}%`, label: 'Avg Accuracy', color: 'text-accent' },
            { icon: Flame, value: gamification.streak, label: 'Day Streak', color: 'text-destructive' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="glass-premium rounded-2xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* XP + Level + Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-premium rounded-2xl p-5 mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">Level {gamification.level}</p>
                <p className="text-xs text-muted-foreground">{gamification.xp} XP total</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-foreground">{gamification.badges.length} badges</span>
            </div>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${gamification.getXpProgress()}%` }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
          {gamification.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {gamification.badges.map(b => (
                <span key={b.id} className="text-lg" title={b.name}>{b.icon}</span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Recent quizzes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-premium rounded-2xl p-5"
        >
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary" /> Quiz History
          </h3>
          {attempts.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              No quizzes yet. Start your first challenge!
            </p>
          ) : (
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {attempts.map((a, i) => {
                const topicInfo = TOPICS.find(t => t.id === a.topic);
                const accuracy = Math.round((a.correct_answers / a.total_questions) * 100);
                return (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.03 }}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-2xl">{topicInfo?.icon || '📝'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{topicInfo?.name || a.topic}</p>
                      <p className="text-xs text-muted-foreground">
                        {a.correct_answers}/{a.total_questions} correct · {accuracy}%
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono font-bold text-primary text-sm">{a.score}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(a.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
