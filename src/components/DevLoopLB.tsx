import React from 'react';
import './DevLoopLB.css';

const DevLoopLB: React.FC = () => {
  return (
    <div className="devloop-logo">
      <span className="bracket">&lt;</span>
      <span className="devloop-text">DevLoop</span>
      <span className="lb-text">LB</span>
      <span className="bracket">&gt;</span>
    </div>
  );
};

export default DevLoopLB;