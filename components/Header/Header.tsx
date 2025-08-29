// components/Header/Header.tsx
import React from 'react';
import IndexSearch from './IndexSearch';
import TimeFrameDropdown from './TimeFrameDropdown';
import IndicatorsDropdown from './IndicatorsDropdown';
import SettingsDropdown from './SettingsDropdown';
import { IndexOption } from '../../types/trading.types';

interface HeaderProps {
  selectedIndex: IndexOption;
  selectedTimeFrame: string;
  selectedIndicators: string[];
  searchQuery: string;
  onIndexSelect: (index: IndexOption) => void;
  onTimeFrameChange: (timeFrame: string) => void;
  onIndicatorToggle: (indicator: string) => void;
  onSearchChange: (query: string) => void;
  onSettingClick?: (setting: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  selectedIndex,
  selectedTimeFrame,
  selectedIndicators,
  searchQuery,
  onIndexSelect,
  onTimeFrameChange,
  onIndicatorToggle,
  onSearchChange,
  onSettingClick
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            T
          </div>
        </div>

        {/* Index Search */}
        <IndexSearch
          selectedIndex={selectedIndex}
          searchQuery={searchQuery}
          onIndexSelect={onIndexSelect}
          onSearchChange={onSearchChange}
        />

        {/* Time Frame Dropdown */}
        <TimeFrameDropdown
          selectedTimeFrame={selectedTimeFrame}
          onTimeFrameChange={onTimeFrameChange}
        />

        {/* Indicators Dropdown */}
        <IndicatorsDropdown
          selectedIndicators={selectedIndicators}
          onIndicatorToggle={onIndicatorToggle}
        />
      </div>

      {/* Right Side - Settings */}
      <SettingsDropdown onSettingClick={onSettingClick} />
    </header>
  );
};

export default Header;