import React from 'react';
import { Users, UserPlus, UserCheck, UserX } from 'lucide-react';

const CustomersPage: React.FC = () => {
  const customerMetrics = [
    { label: 'Total Customers', value: '12,458', change: '+8.2%', isPositive: true, icon: Users },
    { label: 'New Customers', value: '1,234', change: '+12.5%', isPositive: true, icon: UserPlus },
    { label: 'Active Customers', value: '9,832', change: '+5.3%', isPositive: true, icon: UserCheck },
    { label: 'Churned', value: '156', change: '-2.1%', isPositive: false, icon: UserX },
  ];

  const topCustomers = [
    { name: 'Acme Corporation', revenue: '$125,000', orders: 45, status: 'Enterprise' },
    { name: 'TechStart Inc', revenue: '$98,500', orders: 38, status: 'Premium' },
    { name: 'Global Solutions', revenue: '$87,200', orders: 32, status: 'Enterprise' },
    { name: 'Digital Dynamics', revenue: '$76,800', orders: 28, status: 'Premium' },
    { name: 'Innovation Labs', revenue: '$65,400', orders: 24, status: 'Standard' },
  ];

  const customerSegments = [
    { segment: 'Enterprise', count: 245, percentage: '65%', value: '$1.2M' },
    { segment: 'Premium', count: 892, percentage: '25%', value: '$480K' },
    { segment: 'Standard', count: 1456, percentage: '10%', value: '$120K' },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8" style={{ border: '1px solid var(--border)' }}>
        <h1 className="text-xl md:text-2xl font-bold mb-2">Customer Management</h1>
        <p className="muted text-sm">Customer insights, segments, and lifetime value</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {customerMetrics.map((metric, idx) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Top Customers</h2>
          <div className="space-y-3">
            {topCustomers.map((customer, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg transition-colors" style={{ backgroundColor: 'var(--border)', opacity: 0.5 }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent-start)', color: 'var(--card-bg)' }}>
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{customer.name}</p>
                    <p className="muted text-xs">{customer.orders} orders · {customer.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{customer.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Customer Segments</h2>
          <div className="space-y-4">
            {customerSegments.map((segment, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{segment.segment}</p>
                    <p className="muted text-xs">{segment.count} customers</p>
                  </div>
                  <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>{segment.value}</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'var(--border)' }}>
                  <div className="h-2 rounded-full" style={{ width: segment.percentage, backgroundColor: 'var(--accent-start)' }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.3 }}>
            <p className="text-xs font-semibold muted mb-1">AVERAGE LIFETIME VALUE</p>
            <p className="text-2xl font-bold" style={{ color: 'var(--text)' }}>$8,425</p>
            <p className="text-xs muted mt-1">↑ 15% from last quarter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
