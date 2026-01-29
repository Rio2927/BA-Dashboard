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
      } card-surface border-r transition-all duration-300 flex flex-col shadow-2xl
      fixed md:relative inset-y-0 left-0 z-50 md:z-auto
      ${!sidebarOpen && 'md:block hidden'}
      `}
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="h-16 md:h-20 flex items-center justify-between px-4 md:px-6 border-b border-slate-700">
        {sidebarOpen && (
          <span className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
            Analytics
          </span>
        )}
        <button onClick={toggleSidebar} className="muted hover:opacity-80 transition-opacity">
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
                ? 'accent-active'
                : 'muted hover:opacity-100'
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
