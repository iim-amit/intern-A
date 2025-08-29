// components/Header/Indicators.tsx
import React from 'react';
import { INDICATORS } from '../../utils/constants';

interface IndicatorsProps {
  selectedIndicators: string[];
  onIndicatorToggle: (indicator: string) => void;
}

const Indicators: React.FC<IndicatorsProps> = ({ 
  selectedIndicators, 
  onIndicatorToggle 
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-400">Indicators:</span>
      <div className="flex items-center space-x-1">
        {INDICATORS.map((indicator) => (
          <button
            key={indicator}
            onClick={() => onIndicatorToggle(indicator)}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              selectedIndicators.includes(indicator)
                ? 'bg-orange-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {indicator}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Indicators;