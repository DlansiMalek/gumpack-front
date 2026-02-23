import React from 'react';

export const OlinaBottleNord = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottleGreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2d5016" />
        <stop offset="50%" stopColor="#3d6b1f" />
        <stop offset="100%" stopColor="#2d5016" />
      </linearGradient>
      <linearGradient id="oilGreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9ab86c" />
        <stop offset="100%" stopColor="#7a9b4d" />
      </linearGradient>
    </defs>
    
    <rect x="35" y="20" width="50" height="15" rx="3" fill="#1a3a0a" />
    <circle cx="60" cy="27" r="8" fill="#0d2005" />
    
    <rect x="40" y="35" width="40" height="30" fill="url(#bottleGreen)" opacity="0.3" />
    
    <rect x="30" y="65" width="60" height="180" rx="8" fill="url(#bottleGreen)" opacity="0.2" />
    <rect x="32" y="67" width="56" height="176" rx="7" fill="url(#oilGreen)" opacity="0.6" />
    
    <rect x="35" y="100" width="50" height="120" rx="4" fill="#1a3a0a" opacity="0.8" />
    <text x="60" y="140" fontSize="12" fill="#d4af37" textAnchor="middle" fontWeight="bold">OLINA</text>
    <text x="60" y="160" fontSize="8" fill="#d4af37" textAnchor="middle">Le Nord</text>
    
    <ellipse cx="60" cy="115" rx="15" ry="8" fill="#4a7c2e" opacity="0.6" />
    <ellipse cx="55" cy="113" rx="4" ry="6" fill="#5a8c3e" opacity="0.8" />
    <ellipse cx="65" cy="113" rx="4" ry="6" fill="#5a8c3e" opacity="0.8" />
    
    <rect x="38" y="245" width="44" height="30" fill="url(#bottleGreen)" opacity="0.3" />
    <rect x="30" y="275" width="60" height="20" rx="3" fill="#1a3a0a" />
  </svg>
);

export const OlinaBottleCentre = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottleAmber" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b4513" />
        <stop offset="50%" stopColor="#a0522d" />
        <stop offset="100%" stopColor="#8b4513" />
      </linearGradient>
      <linearGradient id="oilAmber" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#daa520" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
    </defs>
    
    <rect x="35" y="20" width="50" height="15" rx="3" fill="#3d2817" />
    <circle cx="60" cy="27" r="8" fill="#2d1810" />
    
    <rect x="40" y="35" width="40" height="30" fill="url(#bottleAmber)" opacity="0.3" />
    
    <rect x="30" y="65" width="60" height="180" rx="8" fill="url(#bottleAmber)" opacity="0.2" />
    <rect x="32" y="67" width="56" height="176" rx="7" fill="url(#oilAmber)" opacity="0.6" />
    
    <rect x="35" y="100" width="50" height="120" rx="4" fill="#3d2817" opacity="0.8" />
    <text x="60" y="140" fontSize="12" fill="#d4af37" textAnchor="middle" fontWeight="bold">OLINA</text>
    <text x="60" y="160" fontSize="8" fill="#d4af37" textAnchor="middle">Le Centre</text>
    
    <ellipse cx="60" cy="115" rx="15" ry="8" fill="#a0522d" opacity="0.6" />
    <ellipse cx="55" cy="113" rx="4" ry="6" fill="#b8722d" opacity="0.8" />
    <ellipse cx="65" cy="113" rx="4" ry="6" fill="#b8722d" opacity="0.8" />
    
    <rect x="38" y="245" width="44" height="30" fill="url(#bottleAmber)" opacity="0.3" />
    <rect x="30" y="275" width="60" height="20" rx="3" fill="#3d2817" />
  </svg>
);

export const OlinaBottleSud = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottleOrange" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b3a0a" />
        <stop offset="50%" stopColor="#a04a1a" />
        <stop offset="100%" stopColor="#8b3a0a" />
      </linearGradient>
      <linearGradient id="oilOrange" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff8c00" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    
    <rect x="35" y="20" width="50" height="15" rx="3" fill="#3d1a0a" />
    <circle cx="60" cy="27" r="8" fill="#2d1005" />
    
    <rect x="40" y="35" width="40" height="30" fill="url(#bottleOrange)" opacity="0.3" />
    
    <rect x="30" y="65" width="60" height="180" rx="8" fill="url(#bottleOrange)" opacity="0.2" />
    <rect x="32" y="67" width="56" height="176" rx="7" fill="url(#oilOrange)" opacity="0.6" />
    
    <rect x="35" y="100" width="50" height="120" rx="4" fill="#3d1a0a" opacity="0.8" />
    <text x="60" y="140" fontSize="12" fill="#d4af37" textAnchor="middle" fontWeight="bold">OLINA</text>
    <text x="60" y="160" fontSize="8" fill="#d4af37" textAnchor="middle">Le Sud</text>
    
    <ellipse cx="60" cy="115" rx="15" ry="8" fill="#a04a1a" opacity="0.6" />
    <ellipse cx="55" cy="113" rx="4" ry="6" fill="#b85a2a" opacity="0.8" />
    <ellipse cx="65" cy="113" rx="4" ry="6" fill="#b85a2a" opacity="0.8" />
    
    <rect x="38" y="245" width="44" height="30" fill="url(#bottleOrange)" opacity="0.3" />
    <rect x="30" y="275" width="60" height="20" rx="3" fill="#3d1a0a" />
  </svg>
);

export const RegionalLabelNorth = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="northBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4a7c2e" />
        <stop offset="100%" stopColor="#2d5016" />
      </linearGradient>
    </defs>
    
    <rect x="10" y="10" width="180" height="260" rx="8" fill="url(#northBg)" />
    <rect x="15" y="15" width="170" height="250" rx="6" stroke="#d4af37" strokeWidth="2" fill="none" />
    
    <ellipse cx="100" cy="60" rx="25" ry="12" fill="#5a8c3e" />
    <ellipse cx="92" cy="58" rx="6" ry="10" fill="#6a9c4e" />
    <ellipse cx="108" cy="58" rx="6" ry="10" fill="#6a9c4e" />
    
    <text x="100" y="110" fontSize="24" fill="#d4af37" textAnchor="middle" fontWeight="bold">OLINA</text>
    <text x="100" y="135" fontSize="12" fill="#e8d4a0" textAnchor="middle">Extra Virgin Olive Oil</text>
    
    <rect x="30" y="150" width="140" height="80" rx="4" fill="#2d5016" opacity="0.6" />
    
    <text x="100" y="200" fontSize="16" fill="#d4af37" textAnchor="middle" fontWeight="bold">NORTHERN</text>
    <text x="100" y="220" fontSize="16" fill="#d4af37" textAnchor="middle" fontWeight="bold">TUNISIA</text>
    
    <text x="100" y="245" fontSize="10" fill="#e8d4a0" textAnchor="middle">Fresh & Fruity Taste</text>
    <text x="100" y="265" fontSize="9" fill="#c4b490" textAnchor="middle">500ml (16.9 FL OZ)</text>
  </svg>
);

export const RegionalLabelCentral = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="centralBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#b8860b" />
        <stop offset="100%" stopColor="#8b6914" />
      </linearGradient>
    </defs>
    
    <rect x="10" y="10" width="180" height="260" rx="8" fill="url(#centralBg)" />
    <rect x="15" y="15" width="170" height="250" rx="6" stroke="#d4af37" strokeWidth="2" fill="none" />
    
    <ellipse cx="100" cy="60" rx="25" ry="12" fill="#a0752d" />
    <ellipse cx="92" cy="58" rx="6" ry="10" fill="#b8853d" />
    <ellipse cx="108" cy="58" rx="6" ry="10" fill="#b8853d" />
    
    <text x="100" y="110" fontSize="24" fill="#d4af37" textAnchor="middle" fontWeight="bold">OLINA</text>
    <text x="100" y="135" fontSize="12" fill="#e8d4a0" textAnchor="middle">Extra Virgin Olive Oil</text>
    
    <rect x="30" y="150" width="140" height="80" rx="4" fill="#8b6914" opacity="0.6" />
    
    <text x="100" y="200" fontSize="16" fill="#d4af37" textAnchor="middle" fontWeight="bold">CENTRAL</text>
    <text x="100" y="220" fontSize="16" fill="#d4af37" textAnchor="middle" fontWeight="bold">TUNISIA</text>
    
    <text x="100" y="245" fontSize="10" fill="#e8d4a0" textAnchor="middle">Smooth & Balanced Taste</text>
    <text x="100" y="265" fontSize="9" fill="#c4b490" textAnchor="middle">500ml (16.9 FL OZ)</text>
  </svg>
);

export const RegionalLabelSouth = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="southBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b4513" />
        <stop offset="100%" stopColor="#5d2f0a" />
      </linearGradient>
    </defs>
    
    <rect x="10" y="10" width="180" height="260" rx="8" fill="url(#southBg)" />
    <rect x="15" y="15" width="170" height="250" rx="6" stroke="#d4af37" strokeWidth="2" fill="none" />
    
    <ellipse cx="100" cy="60" rx="25" ry="12" fill="#a0522d" />
    <ellipse cx="92" cy="58" rx="6" ry="10" fill="#b8623d" />
    <ellipse cx="108" cy="58" rx="6" ry="10" fill="#b8623d" />
    
    <text x="100" y="110" fontSize="24" fill="#d4af37" textAnchor="middle" fontWeight="bold">OLINA</text>
    <text x="100" y="135" fontSize="12" fill="#e8d4a0" textAnchor="middle">Extra Virgin Olive Oil</text>
    
    <rect x="30" y="150" width="140" height="80" rx="4" fill="#5d2f0a" opacity="0.6" />
    
    <text x="100" y="200" fontSize="16" fill="#d4af37" textAnchor="middle" fontWeight="bold">SOUTHERN</text>
    <text x="100" y="220" fontSize="16" fill="#d4af37" textAnchor="middle" fontWeight="bold">TUNISIA</text>
    
    <text x="100" y="245" fontSize="10" fill="#e8d4a0" textAnchor="middle">Rich & Intense Taste</text>
    <text x="100" y="265" fontSize="9" fill="#c4b490" textAnchor="middle">500ml (16.9 FL OZ)</text>
  </svg>
);
