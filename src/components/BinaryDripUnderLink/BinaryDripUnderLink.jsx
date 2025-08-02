// src/components/BinaryDripUnderLink/BinaryDripUnderLink.jsx
import React, { useMemo } from 'react';
import './BinaryDripUnderLink.css';

const BITS = ['0','1'];

export default function BinaryDripUnderLink({ dropCount = 30 }) {
  const drops = useMemo(() =>
    Array.from({ length: dropCount }, () => ({
      left:  Math.random() * 100 + '%',      // horizontal pos
      delay: (Math.random() * 2).toFixed(2) + 's',  // staggered start
      char:  BITS[Math.floor(Math.random() * BITS.length)], // '0' or '1'
    }))
  , [dropCount]);

  return (
    <>
      {drops.map((d, i) => (
        <span
          key={i}
          className="binary-drip__bit"
          style={{
            left:           d.left,
            animationDelay: d.delay,
          }}
        >
          {d.char}
        </span>
      ))}
    </>
  );
}
