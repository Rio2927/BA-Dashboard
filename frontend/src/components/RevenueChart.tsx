// src/components/RevenueChart.tsx
import React from 'react';
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface RevenueChartProps {
  data: { month: string; revenue: number; target: number; profit?: number }[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <div className="lg:col-span-2 card-surface rounded-2xl p-4 md:p-6 lg:p-8 border shadow-xl" style={{ borderColor: 'var(--border)' }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-bold">Revenue Overview</h2>
          <p className="muted text-xs md:text-sm">Monthly revenue vs target</p>
        </div>
        <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm transition-colors" style={{ backgroundColor: 'var(--accent-start)', color: 'var(--card-bg)' }}>
          Export
        </button>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--accent-start)" stopOpacity={0.22} />
              <stop offset="95%" stopColor="var(--accent-start)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" stroke="var(--muted)" />
          <YAxis stroke="var(--muted)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text)'
            }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Area
            type="monotone"
            dataKey="revenue"
            fill="url(#colorRevenue)"
            stroke="var(--accent-start)"
            strokeWidth={3}
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="var(--muted)"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Target"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
