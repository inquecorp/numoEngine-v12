import React from 'react';
import { useParams } from 'react-router-dom';
import ConversionLayout from '../components/ConversionLayout';
import ConversionForm from '../components/ConversionForm';
import ConversionSuggestions from '../components/ConversionSuggestions';
import SEO from '../components/SEO';
import { lengthUnits, convertLength, generateConversionSuggestions } from '../data/lengthConversions';
import type { ConversionResult } from '../types';

export default function LengthConverter() {
  const { conversion } = useParams();
  const [result, setResult] = React.useState<ConversionResult | null>(null);

  // Parse URL params for pre-selected conversion
  React.useEffect(() => {
    if (conversion) {
      const [from, to] = conversion.split('-to-');
      if (from && to) {
        const fromUnit = lengthUnits.find(u => u.id === from);
        const toUnit = lengthUnits.find(u => u.id === to);
        if (fromUnit && toUnit) {
          // Pre-select the units based on URL
          handleConvert(from, to, 1); // Default to converting 1 unit
        }
      }
    }
  }, [conversion]);

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertLength(value, from, to);

    const conversionResult = {
      from,
      to,
      value,
      result,
    };

    setResult(conversionResult);

    // Save to history with unique ID
    const history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
    const newHistory = [
      {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        ...conversionResult,
        timestamp: new Date(),
        type: 'length',
      },
      ...history,
    ].slice(0, 10);
    localStorage.setItem('conversionHistory', JSON.stringify(newHistory));
  }, []);

  const suggestions = generateConversionSuggestions(
    result?.from || 'kilometers',
    result?.to || 'meters'
  );

  return (
    <>
      <SEO 
        title="Length Converter | Convert Meters, Kilometers, Miles & More"
        description="Free online length converter. Convert between meters, kilometers, miles, yards, feet, inches and more. Fast, accurate length unit conversions with metric and imperial units."
        type="length"
      />
      
      <ConversionLayout
        title="Length Converter"
        description="Convert between different units of length and distance"
        type="length"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={lengthUnits} 
            onConvert={handleConvert}
            initialFrom={result?.from}
            initialTo={result?.to}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">{result.value} {lengthUnits.find(u => u.id === result.from)?.symbol}</span>
                <span className="mx-3">=</span>
                <span className="font-bold text-2xl text-indigo-600">
                  {result.result.toFixed(6)} {lengthUnits.find(u => u.id === result.to)?.symbol}
                </span>
              </p>
            </div>
          )}

          <ConversionSuggestions suggestions={suggestions} type="length" />
        </div>
      </ConversionLayout>
    </>
  );
}