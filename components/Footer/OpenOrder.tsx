// components/Footer/OpenOrders.tsx
import React from 'react';
import { Order } from '../../types/trading.types';

interface OpenOrdersProps {
  orders: Order[];
}

const OpenOrders: React.FC<OpenOrdersProps> = ({ orders }) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-400">Open Orders:</span>
      <div className="flex items-center space-x-2">
        {orders.map((order) => (
          <div 
            key={order.id} 
            className="bg-blue-900/30 border border-blue-600/50 rounded px-2 py-1 text-xs"
          >
            <span className={`font-medium ${
              order.type === 'BUY' ? 'text-green-400' : 'text-red-400'
            }`}>
              {order.type}
            </span>
            <span className="text-gray-300 ml-1">
              {order.quantity}@{order.price.toLocaleString()}
            </span>
            <span className="text-orange-400 ml-1 text-xs">
              ({order.status})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenOrders;