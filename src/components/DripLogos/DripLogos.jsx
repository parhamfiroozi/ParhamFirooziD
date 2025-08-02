// src/components/DripLogos/DripLogos.jsx
import React, { useMemo } from 'react';
import './DripLogos.css';

/**
 * logos: array of { src: string, width: number, height: number }
 */
export default function DripLogos({ 
  word = 'PARHAM', 
  logos = [], 
  dripCount = 30 
}) {
  // Precompute random drips
  const drips = useMemo(() => {
    return Array.from({ length: dripCount }, () => {
      const logo = logos[Math.floor(Math.random() * logos.length)];
      return {
        left: Math.random() * 100 + '%',
        delay: (Math.random() * 2).toFixed(2) + 's',
        size: 16 + Math.random() * 24,  // px
        logo,
      };
    });
  }, [dripCount, logos]);

  return (
    <div className="drip-logos-container">
      <h1 className="drip-logos-word">{word}</h1>
      {drips.map((d, i) => (
        <img
          key={i}
          className="drip-logo"
          src={d.logo.src}
          style={{
            left: d.left,
            width: d.size + 'px',
            height: (d.size * d.logo.height / d.logo.width) + 'px',
            animationDelay: d.delay,
          }}
          alt=""
        />
      ))}
    </div>
  );
}
