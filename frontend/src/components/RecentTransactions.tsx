import React from "react";

interface Transaction {
  id: number;
  customer: string;
  amount: string;
  status: string;
  date: string;
}

const recentTransactions: Transaction[] = [
  { id: 1, customer: "John Doe", amount: "$2,450", status: "Completed", date: "2 mins ago" },
  { id: 2, customer: "Sarah Smith", amount: "$1,890", status: "Processing", date: "15 mins ago" },
  { id: 3, customer: "Mike Johnson", amount: "$3,120", status: "Completed", date: "1 hour ago" },
  { id: 4, customer: "Emily Davis", amount: "$890", status: "Pending", date: "2 hours ago" },
  { id: 5, customer: "Alex Wilson", amount: "$2,100", status: "Completed", date: "3 hours ago" },
  { id: 6, customer: "Rachel Green", amount: "$1,250", status: "Processing", date: "Yesterday" },
  { id: 7, customer: "Monica Geller", amount: "$1,780", status: "Completed", date: "Yesterday" },
  { id: 8, customer: "Chandler Bing", amount: "$3,640", status: "Pending", date: "2 days ago" },
  { id: 9, customer: "Ross Geller", amount: "$4,220", status: "Completed", date: "3 days ago" },
  { id: 10, customer: "Phoebe Buffay", amount: "$970", status: "Completed", date: "Last week" },
];

const RecentTransactions: React.FC = () => (
  <div className="card-surface rounded-2xl p-4 md:p-6 lg:p-8 border shadow-xl" style={{ borderColor: 'var(--border)' }}>
    <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Recent Transactions</h2>
    <div className="space-y-3">
      {recentTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors flex items-center justify-between group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent-start)', color: 'var(--card-bg)' }}>
              {transaction.customer.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{transaction.customer}</p>
              <p className="muted text-xs">{transaction.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold" style={{ color: 'var(--text)' }}>{transaction.amount}</p>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full inline-block ${
                transaction.status === "Completed"
                  ? "bg-green-500/20 text-green-400"
                  : transaction.status === "Processing"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-orange-500/20 text-orange-400"
              }`}
            >
              {transaction.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentTransactions;
