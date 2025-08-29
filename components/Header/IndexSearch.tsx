// components/Header/IndexSearch.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { IndexOption } from '../../types/trading.types';
import { INDEX_OPTIONS } from '../../utils/constants';

interface IndexSearchProps {
  selectedIndex: IndexOption;
  searchQuery: string;
  onIndexSelect: (index: IndexOption) => void;
  onSearchChange: (query: string) => void;
}

const IndexSearch: React.FC<IndexSearchProps> = ({
  selectedIndex,
  searchQuery,
  onIndexSelect,
  onSearchChange
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredIndices = INDEX_OPTIONS.filter(index => 
    index.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    index.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleIndexSelect = (index: IndexOption) => {
    onIndexSelect(index);
    setShowDropdown(false);
    onSearchChange('');
  };

  const isPositive = selectedIndex.change >= 0;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Search className="w-4 h-4 text-gray-500" />
        <div className="text-left">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">{selectedIndex.symbol}</span>
            <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {selectedIndex.price.toLocaleString()}
            </span>
            <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '+' : ''}{selectedIndex.change} ({isPositive ? '+' : ''}{(selectedIndex.changePercent).toFixed(2)}%)
            </span>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search indices..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredIndices.map((index) => (
              <button
                key={index.symbol}
                onClick={() => handleIndexSelect(index)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
              >
                <div>
                  <div className="font-medium text-gray-900">{index.symbol}</div>
                  <div className="text-sm text-gray-500">{index.name}</div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {index.price.toLocaleString()}
                  </div>
                  <div className={`text-sm ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {index.change >= 0 ? '+' : ''}{index.change} ({index.change >= 0 ? '+' : ''}{(index.changePercent).toFixed(2)}%)
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexSearch;