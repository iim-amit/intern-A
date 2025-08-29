// components/TradingTerminal/TradingTerminal.tsx
import React from 'react';

import ChartArea from './ChartArea';
import { IndexInfo } from '../../types/trading.types';

interface TradingTerminalProps {
  indexInfo: IndexInfo;
  selectedTimeFrame: string;
  selectedIndicators: string[];
  onBuyClick?: () => void;
  onSellClick?: () => void;
}

const TradingTerminal: React.FC<TradingTerminalProps> = ({
  indexInfo,
  selectedTimeFrame,
  selectedIndicators,
  onBuyClick,
  onSellClick
}) => {
  return (
    <div className="flex-1 bg-gray-900">
      <div className="bg-gray-800  border-gray-700 h-full relative">
        
        <ChartArea 
          selectedTimeFrame={selectedTimeFrame}
          selectedIndicators={selectedIndicators}
        />
      </div>
    </div>
  );
};

export default TradingTerminal;