import React from 'react';
import { Link } from 'react-router-dom';
import ConversionLayout from '../components/ConversionLayout';
import ConversionForm from '../components/ConversionForm';
import SEO from '../components/SEO';
import { areaUnits, convertArea } from '../data/areaConversions';
import type { ConversionResult } from '../types';

export default function AreaConverter() {
  const [result, setResult] = React.useState<ConversionResult | null>(null);

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertArea(value, from, to);

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
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        ...conversionResult,
        timestamp: new Date(),
        type: 'area',
      },
      ...history,
    ].slice(0, 10);
    localStorage.setItem('conversionHistory', JSON.stringify(newHistory));
  }, []);

  const commonConversions = [
    // Square Kilometers conversions
    { from: 'square-kilometers', to: 'square-meters', title: 'Square Kilometers to Square Meters' },
    { from: 'square-kilometers', to: 'square-centimeters', title: 'Square Kilometers to Square Centimeters' },
    { from: 'square-kilometers', to: 'square-millimeters', title: 'Square Kilometers to Square Millimeters' },
    { from: 'square-kilometers', to: 'hectares', title: 'Square Kilometers to Hectares' },
    { from: 'square-kilometers', to: 'acres', title: 'Square Kilometers to Acres' },
    { from: 'square-kilometers', to: 'square-miles', title: 'Square Kilometers to Square Miles' },
    { from: 'square-kilometers', to: 'square-yards', title: 'Square Kilometers to Square Yards' },
    { from: 'square-kilometers', to: 'square-feet', title: 'Square Kilometers to Square Feet' },
    { from: 'square-kilometers', to: 'square-inches', title: 'Square Kilometers to Square Inches' },
    
    // Square Meters conversions
    { from: 'square-meters', to: 'square-kilometers', title: 'Square Meters to Square Kilometers' },
    { from: 'square-meters', to: 'square-centimeters', title: 'Square Meters to Square Centimeters' },
    { from: 'square-meters', to: 'square-millimeters', title: 'Square Meters to Square Millimeters' },
    { from: 'square-meters', to: 'hectares', title: 'Square Meters to Hectares' },
    { from: 'square-meters', to: 'acres', title: 'Square Meters to Acres' },
    { from: 'square-meters', to: 'square-miles', title: 'Square Meters to Square Miles' },
    { from: 'square-meters', to: 'square-yards', title: 'Square Meters to Square Yards' },
    { from: 'square-meters', to: 'square-feet', title: 'Square Meters to Square Feet' },
    { from: 'square-meters', to: 'square-inches', title: 'Square Meters to Square Inches' },

    // Square Centimeters conversions
    { from: 'square-centimeters', to: 'square-kilometers', title: 'Square Centimeters to Square Kilometers' },
    { from: 'square-centimeters', to: 'square-meters', title: 'Square Centimeters to Square Meters' },
    { from: 'square-centimeters', to: 'square-millimeters', title: 'Square Centimeters to Square Millimeters' },
    { from: 'square-centimeters', to: 'hectares', title: 'Square Centimeters to Hectares' },
    { from: 'square-centimeters', to: 'acres', title: 'Square Centimeters to Acres' },
    { from: 'square-centimeters', to: 'square-miles', title: 'Square Centimeters to Square Miles' },
    { from: 'square-centimeters', to: 'square-yards', title: 'Square Centimeters to Square Yards' },
    { from: 'square-centimeters', to: 'square-feet', title: 'Square Centimeters to Square Feet' },
    { from: 'square-centimeters', to: 'square-inches', title: 'Square Centimeters to Square Inches' },

    // Square Millimeters conversions
    { from: 'square-millimeters', to: 'square-kilometers', title: 'Square Millimeters to Square Kilometers' },
    { from: 'square-millimeters', to: 'square-meters', title: 'Square Millimeters to Square Meters' },
    { from: 'square-millimeters', to: 'square-centimeters', title: 'Square Millimeters to Square Centimeters' },
    { from: 'square-millimeters', to: 'hectares', title: 'Square Millimeters to Hectares' },
    { from: 'square-millimeters', to: 'acres', title: 'Square Millimeters to Acres' },
    { from: 'square-millimeters', to: 'square-miles', title: 'Square Millimeters to Square Miles' },
    { from: 'square-millimeters', to: 'square-yards', title: 'Square Millimeters to Square Yards' },
    { from: 'square-millimeters', to: 'square-feet', title: 'Square Millimeters to Square Feet' },
    { from: 'square-millimeters', to: 'square-inches', title: 'Square Millimeters to Square Inches' },

    // Hectares conversions
    { from: 'hectares', to: 'square-kilometers', title: 'Hectares to Square Kilometers' },
    { from: 'hectares', to: 'square-meters', title: 'Hectares to Square Meters' },
    { from: 'hectares', to: 'square-centimeters', title: 'Hectares to Square Centimeters' },
    { from: 'hectares', to: 'square-millimeters', title: 'Hectares to Square Millimeters' },
    { from: 'hectares', to: 'acres', title: 'Hectares to Acres' },
    { from: 'hectares', to: 'square-miles', title: 'Hectares to Square Miles' },
    { from: 'hectares', to: 'square-yards', title: 'Hectares to Square Yards' },
    { from: 'hectares', to: 'square-feet', title: 'Hectares to Square Feet' },
    { from: 'hectares', to: 'square-inches', title: 'Hectares to Square Inches' },

    // Acres conversions
    { from: 'acres', to: 'square-kilometers', title: 'Acres to Square Kilometers' },
    { from: 'acres', to: 'square-meters', title: 'Acres to Square Meters' },
    { from: 'acres', to: 'square-centimeters', title: 'Acres to Square Centimeters' },
    { from: 'acres', to: 'square-millimeters', title: 'Acres to Square Millimeters' },
    { from: 'acres', to: 'hectares', title: 'Acres to Hectares' },
    { from: 'acres', to: 'square-miles', title: 'Acres to Square Miles' },
    { from: 'acres', to: 'square-yards', title: 'Acres to Square Yards' },
    { from: 'acres', to: 'square-feet', title: 'Acres to Square Feet' },
    { from: 'acres', to: 'square-inches', title: 'Acres to Square Inches' },
  ];

  return (
    <>
      <SEO 
        title="Area Converter | Convert Square Meters, Acres, Square Feet & More"
        description="Free online area converter. Convert between square meters, square kilometers, acres, hectares, square feet and more. Fast, accurate area unit conversions."
        type="area"
      />
      
      <ConversionLayout
        title="Area Converter"
        description="Convert between different units of area"
        type="area"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={areaUnits} 
            onConvert={handleConvert}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">
                  {result.value} {areaUnits.find(u => u.id === result.from)?.symbol}
                </span>
                <span className="mx-3">=</span>
                <span className="font-bold text-2xl text-indigo-600">
                  {result.result.toFixed(6)} {areaUnits.find(u => u.id === result.to)?.symbol}
                </span>
              </p>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Common Conversions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonConversions.map((conversion, index) => (
                <Link
                  key={index}
                  to={`/convert/area/${conversion.from}-to-${conversion.to}`}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-gray-600">{conversion.title}</span>
                  <span className="text-gray-400">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ConversionLayout>
    </>
  );
}