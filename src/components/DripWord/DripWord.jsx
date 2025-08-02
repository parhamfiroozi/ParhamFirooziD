import React, { useMemo } from 'react';
import './DripWord.css';

const LOGOS = [
  '/logos/file.png',
  '/logos/file1.png',
  '/logos/file2.png',
];

export default function DripWord({
  word = 'Electrical',
  dripCount = 20,
  logoSize = { min: 24, max: 48 },
}) {
  const drips = useMemo(() => {
    return Array.from({ length: dripCount }, () => {
      const leftPct = Math.random() * 100 + '%';
      const delay = (Math.random() * 2).toFixed(2) + 's';
      const size = (
        logoSize.min +
        Math.random() * (logoSize.max - logoSize.min)
      ).toFixed(0) + 'px';
      const src = LOGOS[Math.floor(Math.random() * LOGOS.length)];
      return { leftPct, delay, size, src };
    });
  }, [dripCount, logoSize.min, logoSize.max]);

  return (
    <div className="drip-word-inner">
      <h1 className="drip-word">{word}</h1>
      {drips.map((d, i) => (
        <img
          key={i}
          className="drip-logo"
          src={d.src}
          alt=""
          style={{
            left: d.leftPct,
            width: d.size,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
