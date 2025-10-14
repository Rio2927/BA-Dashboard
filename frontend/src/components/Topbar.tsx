// src/components/Topbar.tsx
import React from 'react';
import { Bell, Settings } from 'lucide-react';

interface TopbarProps {
  title: string;
  subtitle: string;
}

const Topbar: React.FC<TopbarProps> = ({ title, subtitle }) => {
  return (
    <div className="h-20 bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 flex items-center justify-between px-8 shadow-lg">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-slate-400 hover:text-white transition-colors group">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </button>
        <button className="text-slate-400 hover:text-white transition-colors">
          <Settings size={24} />
        </button>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition-all">
          JD
        </div>
      </div>
    </div>
  );
};

export default Topbar;
