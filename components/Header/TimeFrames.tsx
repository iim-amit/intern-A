// components/Header/TimeFrames.tsx
import React from 'react';
import { TIME_FRAMES } from '../../utils/constants';

interface TimeFramesProps {
  selectedTimeFrame: string;
  onTimeFrameChange: (timeFrame: string) => void;
}

const TimeFrames: React.FC<TimeFramesProps> = ({ 
  selectedTimeFrame, 
  onTimeFrameChange 
}) => {
  return (
    <div className="flex items-center space-x-1 bg-gray-700 rounded-lg p-1">
      {TIME_FRAMES.map((tf) => (
        <button
          key={tf.value}
          onClick={() => onTimeFrameChange(tf.value)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            selectedTimeFrame === tf.value
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:text-white hover:bg-gray-600'
          }`}
        >
          {tf.label}
        </button>
      ))}
    </div>
  );
};

export default TimeFrames;