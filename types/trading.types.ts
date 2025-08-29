// types/trading.types.ts

export interface TimeFrame {
  label: string;
  value: string;
}

export interface Order {
  id: string;
  type: 'BUY' | 'SELL';
  symbol: string;
  quantity: number;
  price: number;
  time: string;
  status?: 'OPEN' | 'FILLED' | 'PARTIAL';
}

export interface IndexOption {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface IndicatorOption {
  id: string;
  name: string;
  shortName: string;
}

export interface IndexInfo {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  exchange: string;
  status: 'open' | 'closed';
}

export interface TradingState {
  selectedTimeFrame: string;
  selectedIndicators: string[];
  selectedIndex: IndexOption;
  indexInfo: IndexInfo;
  pastOrders: Order[];
  openOrders: Order[];
  searchQuery: string;
}

export interface TradingActions {
  setSelectedTimeFrame: (timeFrame: string) => void;
  toggleIndicator: (indicator: string) => void;
  setSelectedIndicators: (indicators: string[]) => void;
  setSelectedIndex: (index: IndexOption) => void;
  setSearchQuery: (query: string) => void;
}