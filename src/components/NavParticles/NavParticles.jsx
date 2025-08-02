// src/components/NavParticles/NavParticles.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function NavParticles({ effect }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const eeParticles = {
    number: { value: 20 },
    shape: {
      type: 'image',
      image: [
        { src: '/logos/file.svg',  width: 32, height: 32 },
        { src: '/logos/file2.svg', width: 32, height: 32 },
      ],
    },
    move: { direction: 'bottom', speed: 4, outModes: { default: 'out' } },
    size: { value: 20 },
    opacity: { value: 0.9 },
  };

  const options = effect === 'ee'
    ? {
        fullScreen: { enable: true, zIndex: -1 },
        detectRetina: true,
        fpsLimit: 60,
        particles: eeParticles,
      }
    : { fullScreen: { enable: false }, particles: { number: { value: 0 } } };

  return <Particles init={particlesInit} options={options} />;
}
