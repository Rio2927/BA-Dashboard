import React from 'react';

// ✅ Define the interface
interface SidebarProps {
  sidebarOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleSidebar: () => void;
}

// ✅ Apply the interface to the function parameters
const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, activeTab, setActiveTab, toggleSidebar }) => {
  return (
    <div
      className={`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-gradient-to-b from-slate-950 to-slate-900 border-r border-slate-700 transition-all duration-300 flex flex-col shadow-2xl`}
    >
      <div className="h-20 flex items-center justify-between px-6 border-b border-slate-700">
        {sidebarOpen && (
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Analytics
          </span>
        )}
        <button onClick={toggleSidebar} className="text-slate-400 hover:text-white transition-colors">
          {sidebarOpen ? '✖' : '☰'}
        </button>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {[
          { name: 'Overview', id: 'overview' },
          { name: 'Revenue', id: 'revenue' },
          { name: 'Customers', id: 'customers' },
          { name: 'Orders', id: 'orders' },
          { name: 'Analytics', id: 'analytics' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
              activeTab === item.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            {sidebarOpen && <span className="font-medium">{item.name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
