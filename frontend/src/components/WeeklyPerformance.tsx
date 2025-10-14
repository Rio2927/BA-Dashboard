import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface DailySales {
  date: string;
  sales: number;
  visitors: number;
}

interface WeeklyPerformanceProps {
  dailySalesData: DailySales[];
}

const WeeklyPerformance: React.FC<WeeklyPerformanceProps> = ({ dailySalesData }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-xl">
    <h2 className="text-xl font-bold text-white mb-2">Weekly Performance</h2>
    <p className="text-slate-400 text-sm mb-6">Sales and visitors trend</p>
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={dailySalesData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="date" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569", borderRadius: "8px" }} />
        <Legend />
        <Bar dataKey="sales" fill="#10b981" radius={[8, 8, 0, 0]} />
        <Bar dataKey="visitors" fill="#f59e0b" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklyPerformance;
