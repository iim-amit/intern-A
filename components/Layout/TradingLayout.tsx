"use client";


import { useState, useEffect, useRef, useCallback } from 'react';
import { init, dispose, Chart as KChart } from 'klinecharts';
import { OHLCV } from '@/public/data/ohlcv.json';
export default function TradingLayout() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<KChart | null>(null);
  const [data, setData] = useState<OHLCV[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load demo data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/data/ohlcv.json');
        
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }
        
        const jsonData: OHLCV[] = await response.json();
        
        if (!Array.isArray(jsonData) || jsonData.length === 0) {
          throw new Error('Invalid data format or empty dataset');
        }
        
        setData(jsonData);
        setError(null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Initialize chart
  const initChart = useCallback(() => {
    if (!chartRef.current || !data.length) return;

    // Dispose existing chart
    if (chartInstanceRef.current) {
      dispose(chartRef.current);
    }

    // Create chart with professional styling
    const chart = init(chartRef.current, {
      theme: 'dark',
      styles: {
        layout: {
          background: {
            color: '#0f172a',
          },
          textColor: '#e2e8f0',
        },
        grid: {
          horizontal: {
            show: true,
            size: 1,
            color: '#334155',
            style: 'solid',
          },
          vertical: {
            show: true,
            size: 1,
            color: '#334155',
            style: 'solid',
          },
        },
        candle: {
          type: 'candle_solid',
          bar: {
            upColor: '#10b981',
            downColor: '#ef4444',
            noChangeColor: '#6b7280',
            upBorderColor: '#10b981',
            downBorderColor: '#ef4444',
            noChangeBorderColor: '#6b7280',
            upWickColor: '#10b981',
            downWickColor: '#ef4444',
            noChangeWickColor: '#6b7280',
          },
          tooltip: {
            showRule: 'always',
            showType: 'standard',
            labels: ['Time', 'Open', 'High', 'Low', 'Close', 'Volume'],
            defaultValue: 'n/a',
          },
        },
        crosshair: {
          show: true,
          horizontal: {
            show: true,
            line: {
              color: '#64748b',
              width: 1,
              style: 'dashed',
            },
            text: {
              color: '#e2e8f0',
              backgroundColor: '#1e293b',
              borderColor: '#475569',
              borderRadius: 4,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
            },
          },
          vertical: {
            show: true,
            line: {
              color: '#64748b',
              width: 1,
              style: 'dashed',
            },
            text: {
              color: '#e2e8f0',
              backgroundColor: '#1e293b',
              borderColor: '#475569',
              borderRadius: 4,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
            },
          },
        },
        yAxis: {
          show: true,
          position: 'right',
          type: 'normal',
          inside: false,
          reverse: false,
          tick: {
            show: true,
            text: {
              color: '#94a3b8',
              size: 12,
            },
          },
          axisLine: {
            show: true,
            color: '#475569',
            size: 1,
          },
        },
        xAxis: {
          show: true,
          position: 'bottom',
          type: 'time',
          inside: false,
          reverse: false,
          tick: {
            show: true,
            text: {
              color: '#94a3b8',
              size: 12,
            },
          },
          axisLine: {
            show: true,
            color: '#475569',
            size: 1,
          },
        },
      },
    });

    chartInstanceRef.current = chart;

    // Set all data at once
    const chartData = data.map(candle => ({
      timestamp: candle.timestamp,
      open: candle.open,
      high: candle.high,
      low: candle.low,
      close: candle.close,
      volume: candle.volume,
    }));

    chart.applyNewData(chartData);

    return chart;
  }, [data]);

  // Initialize chart when data is ready
  useEffect(() => {
    if (data.length > 0) {
      initChart();
    }

    return () => {
      if (chartRef.current && chartInstanceRef.current) {
        dispose(chartRef.current);
        chartInstanceRef.current = null;
      }
    };
  }, [initChart]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading chart data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-lg mb-4">Failed to Load Chart Data</div>
          <p className="text-slate-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-4">
      <div 
        ref={chartRef}
        className="w-full h-[calc(100vh-2rem)] rounded-lg border border-slate-700"
      />
    </div>
  );
}