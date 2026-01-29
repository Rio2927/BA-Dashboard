import React from 'react';
import { BarChart3, TrendingUp, Activity, PieChart } from 'lucide-react';
import WeeklyPerformance from '../components/WeeklyPerformance';
import SalesDistribution from '../components/SalesDistribution';
import { categoryData } from '../data/categoryData';

const AnalyticsPage: React.FC = () => {
  const analyticsMetrics = [
    { label: 'Conversion Rate', value: '3.24%', change: '+0.8%', isPositive: true, icon: TrendingUp },
    { label: 'Avg Session', value: '4m 32s', change: '+12s', isPositive: true, icon: Activity },
    { label: 'Bounce Rate', value: '42.3%', change: '-2.1%', isPositive: false, icon: BarChart3 },
    { label: 'Cart Abandon', value: '68.5%', change: '-5.2%', isPositive: false, icon: PieChart },
  ];

  const trafficSources = [
    { source: 'Direct', visitors: 12850, sessions: 18420, conversion: '3.8%' },
    { source: 'Organic Search', visitors: 9240, sessions: 14680, conversion: '4.2%' },
    { source: 'Social Media', visitors: 6780, sessions: 10120, conversion: '2.9%' },
    { source: 'Email', visitors: 5420, sessions: 8640, conversion: '5.1%' },
    { source: 'Referral', visitors: 3280, sessions: 4920, conversion: '3.4%' },
  ];

  const pagePerformance = [
    { page: '/products', views: 45230, avgTime: '5m 12s', exitRate: '32%' },
    { page: '/checkout', views: 12840, avgTime: '3m 45s', exitRate: '68%' },
    { page: '/home', views: 38920, avgTime: '2m 18s', exitRate: '28%' },
    { page: '/pricing', views: 18450, avgTime: '4m 32s', exitRate: '45%' },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8" style={{ border: '1px solid var(--border)' }}>
        <h1 className="text-xl md:text-2xl font-bold mb-2">Advanced Analytics</h1>
        <p className="muted text-sm">Deep dive into user behavior and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {analyticsMetrics.map((metric, idx) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <WeeklyPerformance />
        <SalesDistribution data={categoryData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Traffic Sources</h2>
          <div className="space-y-3">
            {trafficSources.map((source, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.5 }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{source.source}</p>
                  <p className="muted text-xs">{source.visitors.toLocaleString()} visitors · {source.sessions.toLocaleString()} sessions</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{source.conversion}</p>
                  <p className="muted text-xs">conv. rate</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Page Performance</h2>
          <div className="space-y-3">
            {pagePerformance.map((page, idx) => (
              <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.5 }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-sm font-mono" style={{ color: 'var(--text)' }}>{page.page}</p>
                  <span className="text-xs font-bold" style={{ color: 'var(--text)' }}>{page.views.toLocaleString()} views</span>
                </div>
                <div className="flex gap-4 text-xs muted">
                  <span>Avg: {page.avgTime}</span>
                  <span>Exit: {page.exitRate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
        <h2 className="text-lg md:text-xl font-bold mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.3 }}>
            <p className="text-xs font-semibold muted mb-2">HIGHEST CONVERTING PAGE</p>
            <p className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>/pricing</p>
            <p className="text-sm muted">5.1% conversion rate</p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.3 }}>
            <p className="text-xs font-semibold muted mb-2">PEAK TRAFFIC HOUR</p>
            <p className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>2:00 PM - 3:00 PM</p>
            <p className="text-sm muted">18,420 average visitors</p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.3 }}>
            <p className="text-xs font-semibold muted mb-2">TOP DEVICE</p>
            <p className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>Mobile</p>
            <p className="text-sm muted">64% of all sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
