import { motion } from 'framer-motion';

interface CircularTimerProps {
  timeLeft: number;
  totalTime: number;
  size?: number;
}

const CircularTimer = ({ timeLeft, totalTime, size = 100 }: CircularTimerProps) => {
  const progress = timeLeft / totalTime;
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  const getColor = () => {
    if (progress > 0.5) return 'hsl(var(--accent))';
    if (progress > 0.25) return 'hsl(var(--quiz-yellow))';
    return 'hsl(var(--destructive))';
  };

  const getGlowColor = () => {
    if (progress > 0.5) return 'hsl(var(--accent) / 0.4)';
    if (progress > 0.25) return 'hsl(var(--quiz-yellow) / 0.4)';
    return 'hsl(var(--destructive) / 0.4)';
  };

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Pulse ring when time low */}
      {timeLeft <= 5 && (
        <motion.div
          className="absolute inset-[-6px] rounded-full border-2 border-destructive/25"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}

      {/* Background glow */}
      <div
        className="absolute inset-1 rounded-full opacity-20 blur-md"
        style={{ background: getColor() }}
      />

      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="4"
          opacity="0.4"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ filter: `drop-shadow(0 0 8px ${getGlowColor()})` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          key={timeLeft}
          initial={{ scale: 1.4, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          className={`font-mono text-2xl font-bold ${timeLeft <= 5 ? 'text-destructive' : 'text-foreground'}`}
        >
          {timeLeft}
        </motion.span>
      </div>
    </div>
  );
};

export default CircularTimer;
