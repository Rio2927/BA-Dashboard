// src/components/SalesDistribution.tsx
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface SalesDistributionProps {
  data: { name: string; value: number; color: string }[];
}

const SalesDistribution: React.FC<SalesDistributionProps> = ({ data }) => {
  // compute monochrome tonal variants from the CSS accent color
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const computeColors = () => {
      const n = data.length || 5;
      const newColors = new Array(n).fill(null).map((_, i) => {
        // Generate colorful hues evenly distributed across the spectrum
        const hue = (i * 360) / n;
        const saturation = 70; // Vibrant colors
        const lightness = 55 + (i % 2) * 10; // Alternate between 55% and 65% lightness
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      });
      
      setColors(newColors);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(computeColors, 0);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border shadow-xl" style={{ borderColor: 'var(--border)' }}>
      <h2 className="text-lg md:text-xl font-bold mb-2">Sales Distribution</h2>
      <p className="muted text-xs md:text-sm mb-4 md:mb-6">By category</p>
      {colors.length > 0 && (
        <ResponsiveContainer width="100%" height={240}>
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
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default SalesDistribution;
