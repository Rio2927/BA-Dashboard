import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MetricCard from '../components/MetricCard';
import RevenueChart from '../components/RevenueChart';
import SalesDistribution from '../components/SalesDistribution';
import WeeklyPerformance from '../components/WeeklyPerformance';
import TopProducts from '../components/TopProducts';
import AcquisitionChannels from '../components/AcquisitionChannels';
import RecentTransactions from '../components/RecentTransactions';

import { metrics } from '../data/metricsData';
import { revenueData } from '../data/revenueData';
import { categoryData } from '../data/categoryData';
// etc.

export default function AnalyticsDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="h-screen w-screen flex bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar title="Dashboard" subtitle="Welcome back! Here's your business performance" />
        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <MetricCard key={i} {...m} />
            ))}
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-3 gap-6">
            <RevenueChart data={revenueData} />
            <SalesDistribution data={categoryData} />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <WeeklyPerformance />
            <TopProducts />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <AcquisitionChannels />
            <RecentTransactions />
          </div>
        </main>
      </div>
    </div>
  );
}
