import React from 'react';
import { ShoppingCart, Package, CheckCircle, XCircle } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const orderMetrics = [
    { label: 'Total Orders', value: '8,234', change: '+15.3%', isPositive: true, icon: ShoppingCart },
    { label: 'Processing', value: '156', change: '+8.2%', isPositive: true, icon: Package },
    { label: 'Completed', value: '7,892', change: '+16.1%', isPositive: true, icon: CheckCircle },
    { label: 'Cancelled', value: '186', change: '-5.2%', isPositive: false, icon: XCircle },
  ];

  const recentOrders = [
    { id: '#ORD-2847', customer: 'John Smith', amount: '$2,450', status: 'Completed', date: 'Jan 28, 2026' },
    { id: '#ORD-2846', customer: 'Sarah Johnson', amount: '$1,850', status: 'Processing', date: 'Jan 28, 2026' },
    { id: '#ORD-2845', customer: 'Michael Brown', amount: '$3,200', status: 'Completed', date: 'Jan 27, 2026' },
    { id: '#ORD-2844', customer: 'Emily Davis', amount: '$980', status: 'Shipped', date: 'Jan 27, 2026' },
    { id: '#ORD-2843', customer: 'David Wilson', amount: '$1,450', status: 'Processing', date: 'Jan 26, 2026' },
    { id: '#ORD-2842', customer: 'Lisa Anderson', amount: '$2,100', status: 'Completed', date: 'Jan 26, 2026' },
  ];

  const ordersByStatus = [
    { status: 'Completed', count: 7892, percentage: '96%' },
    { status: 'Processing', count: 156, percentage: '2%' },
    { status: 'Cancelled', count: 186, percentage: '2%' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'Processing': return 'bg-blue-500/20 text-blue-400';
      case 'Shipped': return 'bg-purple-500/20 text-purple-400';
      case 'Cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8" style={{ border: '1px solid var(--border)' }}>
        <h1 className="text-xl md:text-2xl font-bold mb-2">Order Management</h1>
        <p className="muted text-sm">Order processing, fulfillment, and tracking</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {orderMetrics.map((metric, idx) => (
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
        <div className="lg:col-span-2 card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                  <th className="text-left py-3 px-2 text-xs font-semibold muted uppercase">Order ID</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold muted uppercase">Customer</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold muted uppercase">Amount</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold muted uppercase">Status</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold muted uppercase">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, idx) => (
                  <tr key={idx} className="border-b hover:opacity-80 transition-opacity" style={{ borderColor: 'var(--border)' }}>
                    <td className="py-3 px-2 font-mono text-sm" style={{ color: 'var(--text)' }}>{order.id}</td>
                    <td className="py-3 px-2 text-sm" style={{ color: 'var(--text)' }}>{order.customer}</td>
                    <td className="py-3 px-2 font-bold text-sm" style={{ color: 'var(--text)' }}>{order.amount}</td>
                    <td className="py-3 px-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-xs muted">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-lg md:text-xl font-bold mb-4">Order Status</h2>
          <div className="space-y-4">
            {ordersByStatus.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.status}</span>
                  <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>{item.count.toLocaleString()}</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'var(--border)' }}>
                  <div className="h-2 rounded-full" style={{ width: item.percentage, backgroundColor: 'var(--accent-start)' }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--border)', opacity: 0.3 }}>
            <p className="text-xs font-semibold muted mb-1">AVERAGE ORDER VALUE</p>
            <p className="text-2xl font-bold" style={{ color: 'var(--text)' }}>$1,845</p>
            <p className="text-xs muted mt-1">↑ 8% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
