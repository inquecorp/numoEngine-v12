import React from 'react';
import ConversionLayout from '../components/ConversionLayout';
import ConversionForm from '../components/ConversionForm';
import SEO from '../components/SEO';
import type { Unit, ConversionResult } from '../types';

const units: Unit[] = [
  { id: 'kilogram', name: 'Kilogram', symbol: 'kg', type: 'weight' },
  { id: 'gram', name: 'Gram', symbol: 'g', type: 'weight' },
  { id: 'milligram', name: 'Milligram', symbol: 'mg', type: 'weight' },
  { id: 'pound', name: 'Pound', symbol: 'lb', type: 'weight' },
  { id: 'ounce', name: 'Ounce', symbol: 'oz', type: 'weight' },
];

const conversions: Record<string, Record<string, number>> = {
  kilogram: {
    gram: 1000,
    milligram: 1000000,
    pound: 2.20462,
    ounce: 35.274,
  },
};

export default function WeightConverter() {
  const [result, setResult] = React.useState<ConversionResult | null>(null);

  const handleConvert = (from: string, to: string, value: number) => {
    let result: number;

    if (from === to) {
      result = value;
    } else if (from === 'kilogram') {
      result = value * conversions.kilogram[to];
    } else if (to === 'kilogram') {
      result = value / conversions.kilogram[from];
    } else {
      const toKilogram = value / conversions.kilogram[from];
      result = toKilogram * conversions.kilogram[to];
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
        type: 'weight',
      },
      ...history,
    ].slice(0, 10);
    localStorage.setItem('conversionHistory', JSON.stringify(newHistory));
  };

  return (
    <>
      <SEO 
        title="Weight Converter | Convert KG to LBS, Grams & More"
        description="Free online weight converter. Convert between kilograms, pounds, ounces, grams, and more. Easy weight conversions with both metric and imperial units."
        type="weight"
      />
      
      <ConversionLayout
        title="Weight Converter"
        description="Convert between different units of weight and mass"
        type="weight"
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