import { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MetricCard from '../components/MetricCard';
import RevenueChart from '../components/RevenueChart';
import SalesDistribution from '../components/SalesDistribution';
import WeeklyPerformance from '../components/WeeklyPerformance';
import TopProducts from '../components/TopProducts';
import AcquisitionChannels from '../components/AcquisitionChannels';
import RecentTransactions from '../components/RecentTransactions';
import RevenuePage from './RevenuePage';
import CustomersPage from './CustomersPage';
import OrdersPage from './OrdersPage';
import AnalyticsPage from './AnalyticsPage';

import { metrics } from '../data/metricsData';
import { revenueData } from '../data/revenueData';
import { categoryData } from '../data/categoryData';
// etc.

export default function AnalyticsDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [pieChartKey, setPieChartKey] = useState(0);
  const prevTabRef = useRef('overview');

  useEffect(() => {
    // Increment key when returning to overview to force pie chart refresh
    if (activeTab === 'overview' && prevTabRef.current !== 'overview') {
      setPieChartKey(prev => prev + 1);
    }
    prevTabRef.current = activeTab;
  }, [activeTab]);

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar title="Dashboard 3" subtitle="Welcome back! Here's your business performance" onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
          {/* Render page content based on activeTab */}
          {activeTab === 'overview' && (
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {metrics.map((m, i) => (
                  <MetricCard key={i} {...m} />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                <RevenueChart data={revenueData} />
                <SalesDistribution key={pieChartKey} data={categoryData} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <WeeklyPerformance />
                <TopProducts />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <AcquisitionChannels />
                <RecentTransactions />
              </div>
            </div>
          )}

          {activeTab === 'revenue' && (
            <div>
              <RevenuePage />
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <CustomersPage />
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <OrdersPage />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <AnalyticsPage />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
