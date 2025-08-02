import React, { useMemo } from 'react';
import './DripUnderLink.css';

const LOGOS = ['/logos/file.png', '/logos/file1.png', '/logos/file2.png'];  // public/logos/

export default function DripUnderLink({ dripCount = 18 }) {
  const drops = useMemo(
    () =>
      Array.from({ length: dripCount }, () => ({
        x: Math.random() * 100,                   // %
        size: 20 + Math.random() * 20,            // px
        delay: (Math.random() * 1.5).toFixed(2),  // s
        src: LOGOS[Math.floor(Math.random() * LOGOS.length)],
      })),
    [dripCount]
  );

  return drops.map((d, i) => (
    <img
      key={i}
      className="drip-underlink__drop"
      src={d.src}
      alt=""
      style={{
        left: `${d.x}%`,
        width: `${d.size}px`,
        animationDelay: `${d.delay}s`,
      }}
    />
  ));
}
