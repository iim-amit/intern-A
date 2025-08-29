// components/Header/SettingsDropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { SETTINGS_OPTIONS } from '../../utils/constants';

interface SettingsDropdownProps {
  onSettingClick?: (setting: string) => void;
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = ({ onSettingClick }) => {
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

  const handleSettingClick = (setting: string) => {
    onSettingClick?.(setting);
    setShowDropdown(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Settings className="w-5 h-5 text-gray-600" />
      </button>

      {showDropdown && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-2 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700">Chart Settings</h3>
          </div>
          <div className="py-2">
            {SETTINGS_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => handleSettingClick(option)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;