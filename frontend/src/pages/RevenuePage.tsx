import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Target } from 'lucide-react';
import RevenueChart from '../components/RevenueChart';
import { revenueData } from '../data/revenueData';

const RevenuePage: React.FC = () => {
  const revenueMetrics = [
    { label: 'Total Revenue', value: '$2.4M', change: '+12.5%', isPositive: true, icon: DollarSign },
    { label: 'Monthly Growth', value: '+18.2%', change: '+5.3%', isPositive: true, icon: TrendingUp },
    { label: 'Target Achievement', value: '94%', change: '+2.1%', isPositive: true, icon: Target },
    { label: 'Revenue Per Customer', value: '$325', change: '-3.2%', isPositive: false, icon: TrendingDown },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8" style={{ border: '1px solid var(--border)' }}>
        <h1 className="text-xl md:text-2xl font-bold mb-2">Revenue Analytics</h1>
        <p className="muted text-sm">Comprehensive revenue metrics and trends</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {revenueMetrics.map((metric, idx) => (
          <div key={idx} className="card-surface rounded-2xl p-4 md:p-6 border" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl" style={{ background: 'var(--accent-start)' }}>
                <metric.icon className="w-5 h-5" style={{ color: 'var(--card-bg)' }} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                metric.isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {metric.change}
              </div>
            </div>
            <p className="muted text-xs font-semibold uppercase tracking-wider mb-1">{metric.label}</p>
            <p className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <RevenueChart data={revenueData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Revenue Breakdown</h2>
          <div className="space-y-3">
            {[
              { category: 'Product Sales', amount: '$1,450,000', percentage: '60%' },
              { category: 'Subscriptions', amount: '$720,000', percentage: '30%' },
              { category: 'Services', amount: '$240,000', percentage: '10%' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.category}</span>
                  <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>{item.amount}</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'var(--border)' }}>
                  <div className="h-2 rounded-full" style={{ width: item.percentage, backgroundColor: 'var(--accent-start)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Top Revenue Sources</h2>
          <div className="space-y-4">
            {[
              { source: 'Enterprise Licenses', revenue: '$480,000', growth: '+22%' },
              { source: 'Premium Tier', revenue: '$360,000', growth: '+18%' },
              { source: 'Consulting', revenue: '$180,000', growth: '+8%' },
              { source: 'Training', revenue: '$95,000', growth: '+15%' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.5 }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{item.source}</p>
                  <p className="muted text-xs">{item.revenue}</p>
                </div>
                <span className="text-green-400 text-xs font-bold">{item.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;
