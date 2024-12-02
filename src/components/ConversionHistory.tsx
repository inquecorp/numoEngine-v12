import React from 'react';
import { Clock } from 'lucide-react';
import type { ConversionHistory as HistoryType } from '../types';

type Props = {
  history: HistoryType[];
  type: string;
};

export default function ConversionHistory({ history, type }: Props) {
  const filteredHistory = history.filter(item => item.type === type).slice(0, 5);

  if (filteredHistory.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex items-center space-x-2 mb-4">
        <Clock className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-900">Recent Conversions</h2>
      </div>
      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        {filteredHistory.map((item, index) => (
          <div key={`${item.id}-${index}`} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  {item.value} {item.from} = {item.result.toFixed(6)} {item.to}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}