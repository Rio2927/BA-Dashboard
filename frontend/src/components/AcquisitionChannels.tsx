// src/components/AcquisitionChannels.tsx
import React from "react";

const channelData = [
  { channel: "Organic", users: 2845, orders: 892, revenue: 45230 },
  { channel: "Paid", users: 2134, orders: 712, revenue: 38950 },
  { channel: "Social", users: 1876, orders: 534, revenue: 28640 },
  { channel: "Email", users: 1234, orders: 283, revenue: 11680 },
];

const AcquisitionChannels: React.FC = () => (
  <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border shadow-xl" style={{ borderColor: 'var(--border)' }}>
    <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Acquisition Channels</h2>
    <div className="space-y-4">
      {channelData.map((channel, idx) => (
        <div key={idx} className="rounded-lg p-4 transition-colors" style={{ backgroundColor: 'var(--border)', opacity: 0.5 }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--muted)' }}></div>
              <span className="font-semibold" style={{ color: 'var(--text)' }}>{channel.channel}</span>
            </div>
            <span className="muted text-sm">{channel.users.toLocaleString()} users</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span className="muted"><strong>{channel.orders}</strong> orders</span>
            <span className="muted"><strong>${channel.revenue.toLocaleString()}</strong> revenue</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AcquisitionChannels;
