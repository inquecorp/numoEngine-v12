import React from 'react';
import ConversionLayout from '../components/ConversionLayout';
import ConversionForm from '../components/ConversionForm';
import SEO from '../components/SEO';
import type { Unit, ConversionResult } from '../types';

const units: Unit[] = [
  { id: 'second', name: 'Second', symbol: 's', type: 'time' },
  { id: 'minute', name: 'Minute', symbol: 'min', type: 'time' },
  { id: 'hour', name: 'Hour', symbol: 'h', type: 'time' },
  { id: 'day', name: 'Day', symbol: 'd', type: 'time' },
  { id: 'week', name: 'Week', symbol: 'w', type: 'time' },
  { id: 'month', name: 'Month', symbol: 'mo', type: 'time' },
  { id: 'year', name: 'Year', symbol: 'y', type: 'time' },
];

const conversions: Record<string, Record<string, number>> = {
  second: {
    minute: 1/60,
    hour: 1/3600,
    day: 1/86400,
    week: 1/604800,
    month: 1/2592000,
    year: 1/31536000,
  },
};

export default function TimeConverter() {
  const [result, setResult] = React.useState<ConversionResult | null>(null);

  const handleConvert = (from: string, to: string, value: number) => {
    let result: number;

    if (from === to) {
      result = value;
    } else if (from === 'second') {
      result = value * conversions.second[to];
    } else if (to === 'second') {
      result = value / conversions.second[from];
    } else {
      const toSeconds = value / conversions.second[from];
      result = toSeconds * conversions.second[to];
    }

    const conversionResult = {
      from,
      to,
      value,
      result,
    };

    setResult(conversionResult);

    // Save to history
    const history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
    const newHistory = [
      {
        id: Date.now().toString(),
        ...conversionResult,
        timestamp: new Date(),
        type: 'time',
      },
      ...history,
    ].slice(0, 10);
    localStorage.setItem('conversionHistory', JSON.stringify(newHistory));
  };

  return (
    <>
      <SEO 
        title="Time Converter | Convert Hours, Minutes, Seconds & More"
        description="Free online time converter. Convert between seconds, minutes, hours, days, weeks, months, and years. Quick and accurate time unit conversions."
        type="time"
      />
      
      <ConversionLayout
        title="Time Converter"
        description="Convert between different units of time"
        type="time"
      >
        <ConversionForm units={units} onConvert={handleConvert} />

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <p className="text-center text-lg">
              {result.value} {units.find(u => u.id === result.from)?.symbol} = {' '}
              <span className="font-bold">
                {result.result.toFixed(6)} {units.find(u => u.id === result.to)?.symbol}
              </span>
            </p>
          </div>
        )}
      </ConversionLayout>
    </>
  );
}