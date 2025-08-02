import React, { useMemo } from 'react';
import './ShapeDripUnderLink.css';

const SHAPES = [
  { clip: 'polygon(50% 0%, 0% 100%, 100% 100%)' },            // triangle
  { clip: 'polygon(25% 0%, 75% 0%, 100% 50%,75%100%,25%100%,0%50%)' }, // hexagon
  { clip: 'circle(50% at 50% 50%)' },                          // circle
  { clip: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },      // square
];

export default function ShapeDripUnderLink({ count = 20, color = '#4fc3f7' }) {
  const drops = useMemo(
    () => Array.from({ length: count }, () => {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      return {
        left:  Math.random() * 100 + '%',
        delay: (Math.random() * 1.5).toFixed(2) + 's',
        size:  6 + Math.random() * 12 + 'px',
        clip:  shape.clip,
      };
    }),
    [count]
  );

  return drops.map((d,i) => (
    <div
      key={i}
      className="shape-drip__drop"
      style={{
        left:           d.left,
        width:          d.size,
        height:         d.size,
        animationDelay: d.delay,
        clipPath:       d.clip,
        background:     color,
      }}
    />
  ));
}
