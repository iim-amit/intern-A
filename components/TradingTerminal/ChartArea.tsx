// components/TradingTerminal/ChartArea.tsx
import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ChartAreaProps {
  selectedTimeFrame: string;
  selectedIndicators: string[];
}

const ChartArea: React.FC<ChartAreaProps> = ({ 
  selectedTimeFrame, 
  selectedIndicators 
}) => {
  return (
    <div className="p-4 h-full">
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">Trading Chart Area</p>
          <p className="text-gray-500 text-sm mb-4">
            Candlestick charts and technical indicators will be displayed here
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Selected: {selectedTimeFrame.toUpperCase()}</span>
            <span>•</span>
            <span>
              Indicators: {selectedIndicators.length > 0 ? selectedIndicators.join(', ') : 'None'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartArea;