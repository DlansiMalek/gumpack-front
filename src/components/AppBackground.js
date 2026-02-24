import React from 'react';

const BG_ELEMENTS = [
  { type: 'leaf',      x: 5,   size: 28, dur: 22, delay: 0,    drift: 40,  rotate: 25  },
  { type: 'olive',     x: 12,  size: 16, dur: 28, delay: 3,    drift: -30, rotate: -15 },
  { type: 'leaf',      x: 22,  size: 20, dur: 19, delay: 7,    drift: 50,  rotate: 40  },
  { type: 'smallleaf', x: 30,  size: 14, dur: 25, delay: 1,    drift: -20, rotate: -35 },
  { type: 'olive',     x: 40,  size: 18, dur: 31, delay: 5,    drift: 35,  rotate: 20  },
  { type: 'leaf',      x: 50,  size: 24, dur: 21, delay: 9,    drift: -45, rotate: -50 },
  { type: 'smallleaf', x: 58,  size: 12, dur: 27, delay: 2,    drift: 25,  rotate: 30  },
  { type: 'olive',     x: 67,  size: 14, dur: 24, delay: 6,    drift: -35, rotate: -20 },
  { type: 'leaf',      x: 75,  size: 22, dur: 20, delay: 11,   drift: 45,  rotate: 55  },
  { type: 'smallleaf', x: 83,  size: 16, dur: 29, delay: 4,    drift: -25, rotate: -40 },
  { type: 'olive',     x: 90,  size: 20, dur: 23, delay: 8,    drift: 30,  rotate: 15  },
  { type: 'leaf',      x: 95,  size: 18, dur: 26, delay: 13,   drift: -50, rotate: -60 },
  { type: 'smallleaf', x: 8,   size: 10, dur: 33, delay: 15,   drift: 20,  rotate: 45  },
  { type: 'olive',     x: 35,  size: 12, dur: 18, delay: 17,   drift: -40, rotate: -25 },
  { type: 'leaf',      x: 62,  size: 16, dur: 30, delay: 10,   drift: 55,  rotate: 35  },
  { type: 'smallleaf', x: 78,  size: 14, dur: 22, delay: 14,   drift: -30, rotate: -45 },
  { type: 'olive',     x: 18,  size: 10, dur: 35, delay: 20,   drift: 35,  rotate: 10  },
  { type: 'leaf',      x: 46,  size: 26, dur: 17, delay: 16,   drift: -55, rotate: -30 },
];

const LeafSVG = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C12 2 4 7 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 7 12 2 12 2Z"
      fill={color} />
    <line x1="12" y1="22" x2="12" y2="8"  stroke={color} strokeWidth="1.2" opacity="0.6" />
    <line x1="12" y1="14" x2="8"  y2="10" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="12" y1="17" x2="16" y2="13" stroke={color} strokeWidth="0.8" opacity="0.4" />
  </svg>
);

const SmallLeafSVG = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M10 1C10 1 3 6 3 12C3 16 6.1 19 10 19C13.9 19 17 16 17 12C17 6 10 1 10 1Z"
      fill={color} />
    <line x1="10" y1="19" x2="10" y2="6" stroke={color} strokeWidth="1" opacity="0.5" />
  </svg>
);

const OliveSVG = ({ size, color }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 20 28" fill="none">
    <ellipse cx="10" cy="16" rx="7" ry="10" fill={color} />
    <ellipse cx="9"  cy="13" rx="2.5" ry="3.5" fill="white" opacity="0.2" />
    <line x1="10" y1="6" x2="10" y2="1" stroke={color} strokeWidth="1.5" opacity="0.7" />
  </svg>
);

const COLORS = [
  'rgba(98,108,65,0.07)',
  'rgba(74,124,46,0.06)',
  'rgba(90,140,62,0.05)',
  'rgba(120,160,60,0.06)',
  'rgba(60,90,30,0.05)',
  'rgba(140,120,50,0.06)',
];

export default function AppBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {BG_ELEMENTS.map((el, i) => {
        const color = COLORS[i % COLORS.length];
        const style = {
          position: 'absolute',
          left: `${el.x}%`,
          bottom: '-80px',
          opacity: 0,
          animation: `bgFloat ${el.dur}s ease-in-out ${el.delay}s infinite`,
          '--drift': `${el.drift}px`,
          '--rotate': `${el.rotate}deg`,
        };
        return (
          <span key={i} style={style}>
            {el.type === 'leaf'      && <LeafSVG      size={el.size} color={color} />}
            {el.type === 'smallleaf' && <SmallLeafSVG size={el.size} color={color} />}
            {el.type === 'olive'     && <OliveSVG     size={el.size} color={color} />}
          </span>
        );
      })}
    </div>
  );
}
