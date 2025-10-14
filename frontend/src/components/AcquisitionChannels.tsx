// src/components/AcquisitionChannels.tsx
import React from "react";

const channelData = [
  { channel: "Organic", users: 2845, orders: 892, revenue: 45230, color: "#06b6d4" },
  { channel: "Paid", users: 2134, orders: 712, revenue: 38950, color: "#06d6a6" },
  { channel: "Social", users: 1876, orders: 534, revenue: 28640, color: "#fbbf24" },
  { channel: "Email", users: 1234, orders: 283, revenue: 11680, color: "#f472b6" },
];

const AcquisitionChannels: React.FC = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-xl">
    <h2 className="text-xl font-bold text-white mb-6">Acquisition Channels</h2>
    <div className="space-y-4">
      {channelData.map((channel, idx) => (
        <div key={idx} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }}></div>
              <span className="text-white font-semibold">{channel.channel}</span>
            </div>
            <span className="text-slate-400 text-sm">{channel.users.toLocaleString()} users</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span className="text-blue-400"><strong>{channel.orders}</strong> orders</span>
            <span className="text-green-400"><strong>${channel.revenue.toLocaleString()}</strong> revenue</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AcquisitionChannels;
