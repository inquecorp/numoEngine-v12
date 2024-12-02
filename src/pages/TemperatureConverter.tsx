import React from 'react';
import ConversionLayout from '../components/ConversionLayout';
import ConversionForm from '../components/ConversionForm';
import SEO from '../components/SEO';
import type { Unit, ConversionResult } from '../types';

const units: Unit[] = [
  { id: 'celsius', name: 'Celsius', symbol: '°C', type: 'temperature' },
  { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F', type: 'temperature' },
  { id: 'kelvin', name: 'Kelvin', symbol: 'K', type: 'temperature' },
];

function convertTemperature(value: number, from: string, to: string): number {
  if (from === to) return value;

  // Convert to Celsius first
  let celsius: number;
  switch (from) {
    case 'fahrenheit':
      celsius = (value - 32) * (5/9);
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  // Convert from Celsius to target unit
  switch (to) {
    case 'fahrenheit':
      return (celsius * 9/5) + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      return celsius;
  }
}

export default function TemperatureConverter() {
  const [result, setResult] = React.useState<ConversionResult | null>(null);

  const handleConvert = (from: string, to: string, value: number) => {
    const result = convertTemperature(value, from, to);

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
        type: 'temperature',
      },
      ...history,
    ].slice(0, 10);
    localStorage.setItem('conversionHistory', JSON.stringify(newHistory));
  };

  return (
    <>
      <SEO 
        title="Temperature Converter | Convert Celsius, Fahrenheit & Kelvin"
        description="Free online temperature converter. Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K). Instant temperature conversions with high precision."
        type="temperature"
      />
      
      <ConversionLayout
        title="Temperature Converter"
        description="Convert between Celsius, Fahrenheit, and Kelvin"
        type="temperature"
      >
        <ConversionForm units={units} onConvert={handleConvert} />

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <p className="text-center text-lg">
              {result.value} {units.find(u => u.id === result.from)?.symbol} = {' '}
              <span className="font-bold">
                {result.result.toFixed(2)} {units.find(u => u.id === result.to)?.symbol}
              </span>
            </p>
          </div>
        )}
      </ConversionLayout>
    </>
  );
}