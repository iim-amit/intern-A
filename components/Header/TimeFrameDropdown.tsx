// components/Header/TimeFrameDropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { TIME_FRAMES } from '../../utils/constants';

interface TimeFrameDropdownProps {
  selectedTimeFrame: string;
  onTimeFrameChange: (timeFrame: string) => void;
}

const TimeFrameDropdown: React.FC<TimeFrameDropdownProps> = ({
  selectedTimeFrame,
  onTimeFrameChange
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

  const handleTimeFrameSelect = (timeFrame: string) => {
    onTimeFrameChange(timeFrame);
    setShowDropdown(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <span className="font-medium text-gray-700">{selectedTimeFrame}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {TIME_FRAMES.map((option) => (
            <button
              key={option.value}
              onClick={() => handleTimeFrameSelect(option.value)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                selectedTimeFrame === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeFrameDropdown;