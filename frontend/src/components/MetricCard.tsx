// src/components/MetricCard.tsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Skeleton from '@mui/material/Skeleton';

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  Icon: React.ElementType;
  bgGradient: string;
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, change, isPositive, Icon, bgGradient, loading = false }) => {
  return (
    <div className="card-surface rounded-2xl p-6 border transition-all hover:shadow-2xl group cursor-pointer transform hover:scale-105 duration-300" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all" style={{ background: 'var(--accent-start)' }}>
          {loading ? <Skeleton variant="circular" width={24} height={24} sx={{ bgcolor: 'grey.900' }} /> : <Icon className="w-6 h-6" style={{ color: 'var(--card-bg)' }} />}
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${
            isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}
        >
          {loading ? (
            <Skeleton variant="rectangular" width={40} height={14} sx={{ bgcolor: 'grey.900' }} />
          ) : (
            <>
              {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {change}
            </>
          )}
        </div>
      </div>

      {loading ? (
        <>
          <Skeleton variant="text" width="40%" height={16} sx={{ bgcolor: 'grey.900' }} />
          <Skeleton variant="text" width="60%" height={36} sx={{ bgcolor: 'grey.900', mt: 1 }} />
        </>
      ) : (
        <>
          <p className="muted text-xs font-semibold uppercase tracking-wider mb-2">{label}</p>
          <p className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{value}</p>
        </>
      )}
    </div>
  );
};

export default React.memo(MetricCard);
