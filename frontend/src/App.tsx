// src/App.tsx
import React from 'react';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <AnalyticsDashboard />
    </div>
  );
};

export default App;
