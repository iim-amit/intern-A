// components/Sidebar/TradingTools.tsx
import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Target, 
  Zap 
} from 'lucide-react';

const TradingTools: React.FC = () => {
  const tools = [
    { icon: BarChart3, label: 'Charts' },
    { icon: TrendingUp, label: 'Trends' },
    { icon: Activity, label: 'Analysis' },
    { icon: Target, label: 'Targets' },
    { icon: Zap, label: 'Quick Trade' }
  ];

  return (
    <aside className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-4">
      {tools.map(({ icon: Icon, label }) => (
        <button 
          key={label}
          className="p-3 hover:bg-gray-700 rounded-lg transition-colors group relative"
        >
          <Icon className="w-6 h-6" />
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </div>
        </button>
      ))}
    </aside>
  );
};

export default TradingTools;