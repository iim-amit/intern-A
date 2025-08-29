// components/Footer/PastOrders.tsx
import React from 'react';
import { Order } from '../../types/trading.types';

interface PastOrdersProps {
  orders: Order[];
  limit?: number;
}

const PastOrders: React.FC<PastOrdersProps> = ({ orders, limit = 3 }) => {
  const displayOrders = orders.slice(0, limit);

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-400">Past Orders:</span>
      <div className="flex items-center space-x-2">
        {displayOrders.map((order) => (
          <div key={order.id} className="bg-gray-700 rounded px-2 py-1 text-xs">
            <span className={`font-medium ${
              order.type === 'BUY' ? 'text-green-400' : 'text-red-400'
            }`}>
              {order.type}
            </span>
            <span className="text-gray-300 ml-1">
              {order.quantity}@{order.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastOrders;