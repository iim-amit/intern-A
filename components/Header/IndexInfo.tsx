// components/Header/IndexInfo.tsx
import React from 'react';
import { IndexInfo as IndexInfoType } from '../../types/trading.types';

interface IndexInfoProps {
  indexInfo: IndexInfoType;
}

const IndexInfo: React.FC<IndexInfoProps> = ({ indexInfo }) => {
  const isPositive = indexInfo.change >= 0;
  
  return (
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
        N
      </div>
      <div>
        <h1 className="text-lg font-semibold">{indexInfo.name}</h1>
        <div className="flex items-center space-x-4 text-sm">
          <span className={`${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {indexInfo.price.toLocaleString()}
          </span>
          <span className={`${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{indexInfo.change} ({isPositive ? '+' : ''}{indexInfo.changePercent}%)
          </span>
          <span className="text-gray-400">5 • {indexInfo.exchange}</span>
        </div>
      </div>
    </div>
  );
};

export default IndexInfo;