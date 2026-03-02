import { motion } from 'framer-motion';

interface CircularTimerProps {
  timeLeft: number;
  totalTime: number;
  size?: number;
}

const CircularTimer = ({ timeLeft, totalTime, size = 100 }: CircularTimerProps) => {
  const progress = timeLeft / totalTime;
  const radius = (size - 8) / 2;
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
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="4"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: 'linear' }}
          style={{
            filter: `drop-shadow(0 0 8px ${getGlowColor()})`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          key={timeLeft}
          initial={{ scale: 1.2, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`font-mono text-2xl font-bold ${
            timeLeft <= 5 ? 'text-destructive animate-timer-pulse' : 'text-foreground'
          }`}
        >
          {timeLeft}
        </motion.span>
      </div>
    </div>
  );
};

export default CircularTimer;
