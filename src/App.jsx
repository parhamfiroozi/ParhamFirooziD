import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './index.css';

// Page components
import HomePage       from './pages/HomePage';
import CodingPage     from './pages/CodingPage';
import ElectricalPage from './pages/ElectricalPage';
import PhysicsPage    from './pages/PhysicsPage';
import MathPage       from './pages/MathPage';

export default function App() {
  const [preview, setPreview] = useState(null);

  const links = [
    { label: 'Home',       key: 'home',    to: '/cocoon' },
    { label: 'Coding',     key: 'coding',  to: '/0101' },
    { label: 'Electrical', key: 'ee',      to: '/cdvdt' },
    { label: 'Physics',    key: 'physics', to: '/pvnrt' },
    { label: 'Math',       key: 'math',    to: '/maryammirzakhani' },
  ];

  return (
    <>
      <NavBar
        links={links}
        bgColor="#000"
        textColor="#fff"
        onPreview={setPreview}
        onLeave={() => setPreview(null)}
        onSelect={() => {}}
        previewKey={preview}
      />

      <main style={{ padding: '2rem' }}>
        <Routes>
          {/* Redirect root to /cocoon */}
          <Route path="/" element={<Navigate to="/cocoon" replace />} />
          <Route path="/cocoon"            element={<HomePage />} />
          <Route path="/0101"              element={<CodingPage />} />
          <Route path="/cdvdt"             element={<ElectricalPage />} />
          <Route path="/pvnrt"             element={<PhysicsPage />} />
          <Route path="/maryammirzakhani"  element={<MathPage />} />
          {/* Catch any other path back to /cocoon */}
          <Route path="*" element={<Navigate to="/cocoon" replace />} />
        </Routes>
      </main>
    </>
  );
}