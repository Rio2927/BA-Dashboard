// src/components/MetricCard.tsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  Icon: React.ElementType;
  bgGradient: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, change, isPositive, Icon, bgGradient }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-slate-500 transition-all hover:shadow-2xl hover:shadow-slate-900/50 group cursor-pointer transform hover:scale-105 duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`bg-gradient-to-br ${bgGradient} p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${
            isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}
        >
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">{label}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
};

export default MetricCard;
