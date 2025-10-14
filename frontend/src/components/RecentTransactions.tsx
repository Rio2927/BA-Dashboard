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
  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-xl">
    <h2 className="text-xl font-bold text-white mb-6">Recent Transactions</h2>
    <div className="space-y-3">
      {recentTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors flex items-center justify-between group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
              {transaction.customer.charAt(0)}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{transaction.customer}</p>
              <p className="text-slate-400 text-xs">{transaction.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-bold">{transaction.amount}</p>
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
