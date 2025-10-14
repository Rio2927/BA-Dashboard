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
    <div className="col-span-2 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
          <p className="text-slate-400 text-sm">Monthly revenue vs target</p>
        </div>
        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition-colors">
          Export
        </button>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #475569',
              borderRadius: '8px',
            }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Area
            type="monotone"
            dataKey="revenue"
            fill="url(#colorRevenue)"
            stroke="#3b82f6"
            strokeWidth={3}
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#8b5cf6"
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
