import React from 'react';

const Leaf = ({ color, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C12 2 4 7 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 7 12 2 12 2Z"
      fill={color} opacity="0.85"
    />
    <line x1="12" y1="22" x2="12" y2="8" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="12" y1="14" x2="8"  y2="10" stroke={color} strokeWidth="1"   opacity="0.4" />
    <line x1="12" y1="17" x2="16" y2="13" stroke={color} strokeWidth="1"   opacity="0.4" />
  </svg>
);

const Olive = ({ color, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="15" rx="7" ry="10" fill={color} opacity="0.9" />
    <ellipse cx="10" cy="13" rx="3" ry="4"  fill="white" opacity="0.25" />
    <line x1="10" y1="5" x2="10" y2="1" stroke={color} strokeWidth="1.5" opacity="0.7" />
  </svg>
);

const SmallLeaf = ({ color, size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 1C10 1 2 6 3 13C3.6 16.5 6.5 19 10 19C13.5 19 16.4 16.5 17 13C18 6 10 1 10 1Z"
      fill={color} opacity="0.8"
    />
    <line x1="10" y1="19" x2="10" y2="6" stroke={color} strokeWidth="1" opacity="0.45" />
  </svg>
);

export const CardParticles = ({ cardClass, colors }) => {
  const { leaf, olive, leafLight } = colors;
  return (
    <>
      <span className={`particle p1 ${cardClass}`}><Olive color={olive} size={16} /></span>
      <span className={`particle p2 ${cardClass}`}><Leaf  color={leaf}  size={20} /></span>
      <span className={`particle p3 ${cardClass}`}><SmallLeaf color={leafLight} size={13} /></span>
      <span className={`particle p4 ${cardClass}`}><Olive color={olive} size={12} /></span>
      <span className={`particle p5 ${cardClass}`}><Leaf  color={leaf}  size={16} /></span>
    </>
  );
};

export const CARD_COLORS = {
  green:    { leaf: '#4a7c2e', olive: '#2d5016', leafLight: '#7ab648' },
  gold:     { leaf: '#b45309', olive: '#92400e', leafLight: '#d97706' },
  olive:    { leaf: '#526b1e', olive: '#3d5214', leafLight: '#7a9b2e' },
  nord:     { leaf: '#059669', olive: '#065f46', leafLight: '#34d399' },
  centre:   { leaf: '#b45309', olive: '#78350f', leafLight: '#f59e0b' },
  sud:      { leaf: '#c2410c', olive: '#7c2d12', leafLight: '#fb923c' },
  northern: { leaf: '#16a34a', olive: '#14532d', leafLight: '#4ade80' },
  central:  { leaf: '#ca8a04', olive: '#713f12', leafLight: '#eab308' },
  southern: { leaf: '#c2410c', olive: '#7c2d12', leafLight: '#fb923c' },
};
