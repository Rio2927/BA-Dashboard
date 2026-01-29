import React from "react";

const topProducts = [
  { id: 1, name: "Wireless Headphones", sales: 1250, revenue: 37500, growth: "+15%" },
  { id: 2, name: "Smart Watch", sales: 980, revenue: 29400, growth: "+8%" },
  { id: 3, name: "USB-C Cable", sales: 1540, revenue: 9240, growth: "+22%" },
  { id: 4, name: "Phone Stand", sales: 890, revenue: 4450, growth: "-5%" },
];

const TopProducts: React.FC = () => (
  <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border shadow-xl" style={{ borderColor: 'var(--border)' }}>
    <h2 className="text-lg md:text-xl font-bold mb-2">Top Products</h2>
    <p className="muted text-xs md:text-sm mb-4 md:mb-6">Best sellers this month</p>
    <div className="space-y-3">
      {topProducts.map((product) => (
        <div key={product.id} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors group cursor-pointer product-item">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-sm product-name" style={{ color: 'var(--text)' }}>
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
              <div className="h-full accent-fill" style={{ width: `${(product.sales / 1540) * 100}%`, background: 'var(--accent-start)' }}></div>
            </div>
            <span className="muted text-xs font-semibold">${product.revenue.toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopProducts;
