"use client";
// hooks/useTradingState.ts
import { useState, useCallback } from 'react';
import { TradingState, TradingActions, IndexOption } from '../types/trading.types';
import { 
  DEFAULT_INDEX_INFO, 
  MOCK_PAST_ORDERS, 
  MOCK_OPEN_ORDERS,
  DEFAULT_INDEX
} from '../utils/constants';

export const useTradingState = (): TradingState & TradingActions => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>('5m');
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(['bb', 'sma']);
  const [selectedIndex, setSelectedIndex] = useState<IndexOption>(DEFAULT_INDEX);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleIndicator = useCallback((indicator: string) => {
    setSelectedIndicators(prev => 
      prev.includes(indicator) 
        ? prev.filter(i => i !== indicator)
        : [...prev, indicator]
    );
  }, []);

  return {
    selectedTimeFrame,
    selectedIndicators,
    selectedIndex,
    indexInfo: DEFAULT_INDEX_INFO,
    pastOrders: MOCK_PAST_ORDERS,
    openOrders: MOCK_OPEN_ORDERS,
    searchQuery,
    setSelectedTimeFrame,
    setSelectedIndicators,
    setSelectedIndex,
    setSearchQuery,
    toggleIndicator,
  };
};