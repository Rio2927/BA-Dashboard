// src/components/SalesDistribution.tsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface SalesDistributionProps {
  data: { name: string; value: number; color: string }[];
}

const SalesDistribution: React.FC<SalesDistributionProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-2">Sales Distribution</h2>
      <p className="text-slate-400 text-sm mb-6">By category</p>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDistribution;
