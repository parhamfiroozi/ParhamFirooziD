// src/components/NavBar/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import DripUnderLink       from '../DripUnderLink/DripUnderLink';
import BinaryDripUnderLink from '../BinaryDripUnderLink/BinaryDripUnderLink';
import ShapeDripUnderLink  from '../ShapeDripUnderLink/ShapeDripUnderLink';

export default function NavBar({
  links,       // [{ label, key, to }]
  bgColor,
  textColor,
  onPreview,
  onLeave,
  onSelect,
  previewKey,
}) {
  return (
    <header
      className="navbar"
      style={{ backgroundColor: bgColor, '--text-color': textColor }}
    >
      <nav className="navbar__nav" onMouseLeave={onLeave}>
        <ul className="navbar__list">
          {links.map(({ label, key, to }) => {
            const isHome    = key === 'home';
            const isPhysics = key === 'physics';
            // build li classes
            let liClass = 'navbar__item';
            if (isHome)    liClass += ' home-link';
            if (isPhysics) liClass += ' physics-link';

            return (
              <li
                key={key}
                className={liClass}
                onMouseEnter={() => onPreview(key)}
                style={{ paddingBottom: '0.5rem' }}
              >
                <NavLink
                  to={to}
                  end={isHome}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' active' : ''}`
                  }
                  onClick={() => onSelect(key)}
                  style={{ color: 'var(--text-color)' }}
                >
                  {label}
                </NavLink>

                {/* Hover effects */}
                {previewKey === 'coding' && key === 'coding' && (
                  <BinaryDripUnderLink dropCount={25} />
                )}
                {previewKey === 'ee' && key === 'ee' && <DripUnderLink />}
                {previewKey === 'math' && key === 'math' && (
                  <ShapeDripUnderLink count={18} />
                )}
                {/* Physics float via CSS on .physics-link */}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
