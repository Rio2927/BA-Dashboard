// src/data/metricsData.ts
import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';

export const metrics = [
  {
    label: 'Total Revenue',
    value: '$124,500',
    change: '+12.5%',
    isPositive: true,
    Icon: DollarSign,
    bgGradient: 'from-blue-600 to-blue-400',
  },
  {
    label: 'Active Users',
    value: '8,234',
    change: '+8.2%',
    isPositive: true,
    Icon: Users,
    bgGradient: 'from-purple-600 to-purple-400',
  },
  {
    label: 'Total Orders',
    value: '3,421',
    change: '-2.1%',
    isPositive: false,
    Icon: ShoppingCart,
    bgGradient: 'from-orange-600 to-orange-400',
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: '+1.3%',
    isPositive: true,
    Icon: Activity,
    bgGradient: 'from-green-600 to-green-400',
  },
];
