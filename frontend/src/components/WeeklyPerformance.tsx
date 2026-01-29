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
  dailySalesData?: DailySales[];
}

const sampleData: DailySales[] = [
  { date: 'Jan', sales: 48000, visitors: 2400 },
  { date: 'Feb', sales: 52000, visitors: 2600 },
  { date: 'Mar', sales: 45000, visitors: 2300 },
  { date: 'Apr', sales: 60000, visitors: 3000 },
  { date: 'May', sales: 68000, visitors: 3400 },
  { date: 'Jun', sales: 72000, visitors: 3600 },
  { date: 'Jul', sales: 69000, visitors: 3450 },
];

const WeeklyPerformance: React.FC<WeeklyPerformanceProps> = ({ dailySalesData }) => {
  const data = dailySalesData ?? sampleData;
  return (
  <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border shadow-xl" style={{ borderColor: 'var(--border)' }}>
    <h2 className="text-lg md:text-xl font-bold mb-2">Weekly Performance</h2>
    <p className="muted text-xs md:text-sm mb-4 md:mb-6">Sales and visitors trend</p>
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis dataKey="date" stroke="var(--muted)" />
        <YAxis stroke="var(--muted)" />
        <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)' }} />
        <Legend />
        <Bar dataKey="sales" fill="var(--accent-start)" radius={[8, 8, 0, 0]} />
        <Bar dataKey="visitors" fill="var(--muted)" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

}

export default WeeklyPerformance;
