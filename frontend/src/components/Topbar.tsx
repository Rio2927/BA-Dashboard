// src/components/Topbar.tsx
import React from 'react';
import { Bell, Settings, Sun, Moon } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';
import { useThemeContext } from '../ThemeContext';

interface TopbarProps {
  title: string;
  subtitle: string;
  onMenuClick?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ title, subtitle, onMenuClick }) => {
  const { mode, toggleMode } = useThemeContext();

  return (
    <div className="h-16 md:h-20 card-surface border-b flex items-center justify-between px-4 md:px-6 lg:px-8 shadow-lg" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        {/* Mobile hamburger menu */}
        <button
          onClick={onMenuClick}
          className="md:hidden muted hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="min-w-0">
          <h1 className="text-lg md:text-2xl font-bold truncate">{title}</h1>
          <p className="text-xs md:text-sm muted truncate hidden sm:block">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <Tooltip title="Notifications" placement="bottom">
          <button
            className="relative muted hover:opacity-80 transition-opacity group hidden sm:block"
            aria-label="View notifications"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </button>
        </Tooltip>

        <Tooltip title="Settings" placement="bottom">
          <button className="muted hover:opacity-80 transition-opacity hidden sm:block" aria-label="Open settings">
            <Settings size={20} />
          </button>
        </Tooltip>

        <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} placement="bottom">
          <button
            onClick={toggleMode}
            title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
            aria-pressed={mode === 'dark'}
            className="muted hover:opacity-80 transition-opacity"
          >
            {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </Tooltip>

        <Tooltip title="Account" placement="bottom">
          <button
            aria-label="Open account menu"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold cursor-pointer transition-all focus:outline-none"
            style={{ background: 'var(--accent-start)', color: 'var(--card-bg)' }}
          >
            JD
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Topbar;
