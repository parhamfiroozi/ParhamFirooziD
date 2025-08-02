import React from 'react';
import './PreviewPane.css';

const previews = {
  coding: (
    <div className="preview-content">
      <h2>Coding Preview</h2>
      <p>Quick glance at your latest coding tutorials and projects.</p>
    </div>
  ),
  ee: (
    <div className="preview-content">
      <h2>Electrical Eng. Preview</h2>
      <p>See schematic snippets and circuit diagrams at a glance.</p>
    </div>
  ),
  physics: (
    <div className="preview-content">
      <h2>Physics Preview</h2>
      <p>Peek at your latest simulations and experiment write-ups.</p>
    </div>
  ),
  math: (
    <div className="preview-content">
      <h2>Math Preview</h2>
      <p>A quick look at your problem sets and proofs.</p>
    </div>
  ),
};

export default function PreviewPane({ previewKey }) {
  if (!previewKey || !previews[previewKey]) return null;
  return (
    <div className="preview-pane">
      {previews[previewKey]}
    </div>
  );
}
