const MOODS = {
  default: {
    from: '#f8f6f0',
    mid:  '#f0ece0',
    to:   '#e8e2d0',
    glow: 'rgba(98,108,65,0.06)',
  },
  green: {
    from: '#eef5e4',
    mid:  '#ddeec4',
    to:   '#cce4a8',
    glow: 'rgba(74,124,46,0.10)',
  },
  gold: {
    from: '#fdf8ec',
    mid:  '#faefd0',
    to:   '#f5e2a8',
    glow: 'rgba(180,83,9,0.09)',
  },
  olive: {
    from: '#f2f5e8',
    mid:  '#e2eac8',
    to:   '#d0dea8',
    glow: 'rgba(82,107,30,0.09)',
  },
  nord: {
    from: '#e8f8f2',
    mid:  '#c8edd8',
    to:   '#a8e0be',
    glow: 'rgba(5,150,105,0.09)',
  },
  centre: {
    from: '#fdf8e8',
    mid:  '#faecc8',
    to:   '#f5da90',
    glow: 'rgba(180,83,9,0.10)',
  },
  sud: {
    from: '#fdf2e8',
    mid:  '#faddbe',
    to:   '#f5c090',
    glow: 'rgba(194,65,12,0.09)',
  },
  northern: {
    from: '#eafaf2',
    mid:  '#c8f0d8',
    to:   '#a0e4bc',
    glow: 'rgba(22,163,74,0.09)',
  },
  central: {
    from: '#fefce0',
    mid:  '#fdf5a0',
    to:   '#f8e060',
    glow: 'rgba(202,138,4,0.09)',
  },
  southern: {
    from: '#fdf2e8',
    mid:  '#fad8b0',
    to:   '#f5b070',
    glow: 'rgba(194,65,12,0.10)',
  },
};

let resetTimer = null;

export function setMood(name) {
  const mood = MOODS[name] || MOODS.default;
  const root = document.documentElement;
  root.style.setProperty('--mood-bg-from', mood.from);
  root.style.setProperty('--mood-bg-mid',  mood.mid);
  root.style.setProperty('--mood-bg-to',   mood.to);
  root.style.setProperty('--mood-glow',    mood.glow);

  // Also update body background directly for instant effect
  document.body.style.background = `linear-gradient(160deg, ${mood.from} 0%, ${mood.mid} 50%, ${mood.to} 100%)`;
  document.body.style.transition  = 'background 1.2s ease';

  const overlay = document.getElementById('mood-overlay');
  if (overlay) {
    overlay.style.background = `radial-gradient(ellipse at 50% 40%, ${mood.glow} 0%, transparent 70%)`;
    overlay.style.transition  = 'background 1.2s ease';
  }
}

export function resetMood(delay = 1200) {
  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => setMood('default'), delay);
}
