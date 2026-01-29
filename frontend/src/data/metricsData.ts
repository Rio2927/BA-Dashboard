// src/data/metricsData.ts
import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';

export const metrics = [
  {
    label: 'Total Revenue',
    value: '$124,500',
    change: '+12.5%',
    isPositive: true,
    Icon: DollarSign,
    bgGradient: 'accent',
  },
  {
    label: 'Active Users',
    value: '8,234',
    change: '+8.2%',
    isPositive: true,
    Icon: Users,
    bgGradient: 'accent',
  },
  {
    label: 'Total Orders',
    value: '3,421',
    change: '-2.1%',
    isPositive: false,
    Icon: ShoppingCart,
    bgGradient: 'accent',
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: '+1.3%',
    isPositive: true,
    Icon: Activity,
    bgGradient: 'accent',
  },
];
