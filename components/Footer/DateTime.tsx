// components/Footer/DateTime.tsx
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const DateTime: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Calendar className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-300">Thu 28 Aug &#39;25</span>
      </div>
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-300">11:20 IST</span>
      </div>
    </div>
  );
};

export default DateTime;