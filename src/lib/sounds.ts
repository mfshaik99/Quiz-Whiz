// Sound effects utility using Web Audio API (no external files needed)
const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

function ensureAudioContext() {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) {
  if (!audioContext) return;
  ensureAudioContext();

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
}

export function playCorrectSound() {
  if (!audioContext) return;
  ensureAudioContext();
  // Ascending arpeggio - cheerful
  playTone(523, 0.12, 'sine', 0.12); // C5
  setTimeout(() => playTone(659, 0.12, 'sine', 0.12), 80); // E5
  setTimeout(() => playTone(784, 0.15, 'sine', 0.15), 160); // G5
  setTimeout(() => playTone(1047, 0.25, 'sine', 0.12), 240); // C6
}

export function playWrongSound() {
  if (!audioContext) return;
  ensureAudioContext();
  // Descending buzz
  playTone(300, 0.15, 'sawtooth', 0.08);
  setTimeout(() => playTone(200, 0.25, 'sawtooth', 0.06), 120);
}

export function playTickSound() {
  if (!audioContext) return;
  ensureAudioContext();
  playTone(800, 0.05, 'sine', 0.06);
}

export function playCountdownUrgent() {
  if (!audioContext) return;
  ensureAudioContext();
  playTone(600, 0.08, 'square', 0.08);
}

export function playTransitionSound() {
  if (!audioContext) return;
  ensureAudioContext();
  playTone(440, 0.08, 'sine', 0.06);
  setTimeout(() => playTone(660, 0.1, 'sine', 0.08), 60);
}

export function playJoinSound() {
  if (!audioContext) return;
  ensureAudioContext();
  playTone(880, 0.1, 'sine', 0.08);
  setTimeout(() => playTone(1100, 0.12, 'sine', 0.08), 80);
}
