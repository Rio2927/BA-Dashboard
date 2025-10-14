import React from "react";

const topProducts = [
  { id: 1, name: "Wireless Headphones", sales: 1250, revenue: 37500, growth: "+15%" },
  { id: 2, name: "Smart Watch", sales: 980, revenue: 29400, growth: "+8%" },
  { id: 3, name: "USB-C Cable", sales: 1540, revenue: 9240, growth: "+22%" },
  { id: 4, name: "Phone Stand", sales: 890, revenue: 4450, growth: "-5%" },
];

const TopProducts: React.FC = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-xl">
    <h2 className="text-xl font-bold text-white mb-2">Top Products</h2>
    <p className="text-slate-400 text-sm mb-6">Best sellers this month</p>
    <div className="space-y-3">
      {topProducts.map((product) => (
        <div key={product.id} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors group cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <p className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
              {product.name}
            </p>
            <span className={`text-xs font-bold px-2 py-1 rounded ${
              product.growth.includes('-')
                ? 'bg-red-500/20 text-red-400'
                : 'bg-green-500/20 text-green-400'
            }`}>
              {product.growth}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-slate-600 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full" style={{ width: `${(product.sales / 1540) * 100}%` }}></div>
            </div>
            <span className="text-slate-400 text-xs font-semibold">${product.revenue.toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopProducts;
