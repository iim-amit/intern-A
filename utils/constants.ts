// utils/constants.ts
import { TimeFrame, Order, IndexInfo, IndexOption, IndicatorOption } from '../types/trading.types';

export const TIME_FRAMES: TimeFrame[] = [
  { label: '1m', value: '1m' },
  { label: '5m', value: '5m' },
  { label: '15m', value: '15m' },
  { label: '30m', value: '30m' },
  { label: '1H', value: '1h' },
  { label: '4H', value: '4h' },
  { label: '1D', value: '1d' }
];

export const INDEX_OPTIONS: IndexOption[] = [
  { symbol: 'NIFTY', name: 'Nifty 50', price: 24533.10, change: -0.85, changePercent: -0.003 },
  { symbol: 'BANKNIFTY', name: 'Bank Nifty', price: 51245.30, change: 125.40, changePercent: 0.245 },
  { symbol: 'SENSEX', name: 'BSE Sensex', price: 81467.10, change: -234.50, changePercent: -0.287 },
  { symbol: 'FINNIFTY', name: 'Nifty Financial', price: 23156.85, change: 45.20, changePercent: 0.196 }
];

export const INDICATOR_OPTIONS: IndicatorOption[] = [
  { id: 'bb', name: 'Bollinger Bands', shortName: 'BB' },
  { id: 'rsi', name: 'Relative Strength Index', shortName: 'RSI' },
  { id: 'fibonacci', name: 'Fibonacci Retracement', shortName: 'FIB' },
  { id: 'macd', name: 'MACD', shortName: 'MACD' },
  { id: 'sma', name: 'Simple Moving Average', shortName: 'SMA' },
  { id: 'ema', name: 'Exponential Moving Average', shortName: 'EMA' },
  { id: 'stoch', name: 'Stochastic Oscillator', shortName: 'STOCH' }
];

export const SETTINGS_OPTIONS = [
  'Chart Settings',
  'Price Scale',
  'Time Scale',
  'Grid Lines',
  'Crosshair',
  'Legend',
  'Status Line',
  'Timezone'
];

export const DEFAULT_INDEX: IndexOption = INDEX_OPTIONS[0];

export const DEFAULT_INDEX_INFO: IndexInfo = {
  name: 'Nifty 50',
  symbol: 'NIFTY',
  price: 24533.10,
  change: -0.85,
  changePercent: -0.003,
  exchange: 'NSE',
  status: 'open'
};

export const MOCK_PAST_ORDERS: Order[] = [
  { 
    id: '1', 
    type: 'BUY', 
    symbol: 'NIFTY', 
    quantity: 100, 
    price: 24500.90, 
    time: '14:30', 
    status: 'FILLED' 
  },
  { 
    id: '2', 
    type: 'SELL', 
    symbol: 'NIFTY', 
    quantity: 50, 
    price: 24580.30, 
    time: '13:45', 
    status: 'FILLED' 
  },
  { 
    id: '3', 
    type: 'BUY', 
    symbol: 'NIFTY', 
    quantity: 75, 
    price: 24420.75, 
    time: '12:15', 
    status: 'FILLED' 
  },
];

export const MOCK_OPEN_ORDERS: Order[] = [
  { 
    id: '4', 
    type: 'BUY', 
    symbol: 'NIFTY', 
    quantity: 100, 
    price: 24400.00, 
    time: '15:20', 
    status: 'OPEN' 
  },
  { 
    id: '5', 
    type: 'SELL', 
    symbol: 'NIFTY', 
    quantity: 25, 
    price: 24650.00, 
    time: '15:18', 
    status: 'PARTIAL' 
  },
];