// components/TradingTerminal/ChartArea.tsx
import React, { useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";
import TradingLayout from "../Layout/TradingLayout";

interface ChartAreaProps {
  selectedTimeFrame: string;
  selectedIndicators: string[];
}

const ChartArea: React.FC<ChartAreaProps> = ({
  selectedTimeFrame,
  selectedIndicators,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching — replace with your real API call later
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="p-4 h-full">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4 animate-pulse" />
            <p className="text-gray-400 text-lg">Trading Chart Area</p>
            <p className="text-gray-500 text-sm mb-4">
              Candlestick charts and technical indicators will be displayed here
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>Selected: {selectedTimeFrame.toUpperCase()}</span>
              <span>•</span>
              <span>
                Indicators:{" "}
                {selectedIndicators.length > 0
                  ? selectedIndicators.join(", ")
                  : "None"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Show the actual chart when loaded
  return (
    <div className="p-4 h-full">
      <TradingLayout/>
    </div>
  );
};

export default ChartArea;