// components/Header/IndicatorsDropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, BarChart3 } from 'lucide-react';
import { INDICATOR_OPTIONS } from '../../utils/constants';

interface IndicatorsDropdownProps {
  selectedIndicators: string[];
  onIndicatorToggle: (indicator: string) => void;
}

const IndicatorsDropdown: React.FC<IndicatorsDropdownProps> = ({
  selectedIndicators,
  onIndicatorToggle
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleIndicatorToggle = (indicatorId: string) => {
    onIndicatorToggle(indicatorId);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <BarChart3 className="w-4 h-4 text-gray-600" />
        <span className="text-gray-700">Indicators</span>
        {selectedIndicators.length > 0 && (
          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
            {selectedIndicators.length}
          </span>
        )}
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-2 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700">Technical Indicators</h3>
          </div>
          <div className="max-h-60 overflow-y-auto p-2">
            {INDICATOR_OPTIONS.map((indicator) => (
              <label
                key={indicator.id}
                className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded cursor-pointer"
              >
                <div>
                  <div className="font-medium text-gray-900">{indicator.name}</div>
                  <div className="text-sm text-gray-500">{indicator.shortName}</div>
                </div>
                <input
                  type="checkbox"
                  checked={selectedIndicators.includes(indicator.id)}
                  onChange={() => handleIndicatorToggle(indicator.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndicatorsDropdown;