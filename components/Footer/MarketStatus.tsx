// components/Footer/MarketStatus.tsx
import React from 'react';

interface MarketStatusProps {
  isOpen: boolean;
}

const MarketStatus: React.FC<MarketStatusProps> = ({ isOpen }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${
        isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'
      }`}></div>
      <span className="text-sm text-gray-300">
        Market {isOpen ? 'Open' : 'Closed'}
      </span>
    </div>
  );
};

export default MarketStatus;