import React from 'react';
import ConversionLayout from '../../components/ConversionLayout';
import ConversionForm from '../../components/ConversionForm';
import SEO from '../../components/SEO';
import { areaUnits, convertArea } from '../../data/areaConversions';
import type { ConversionResult } from '../../types';

const unitMappings = {
  'km2': { id: 'km2', title: 'Square Kilometers', description: 'Convert square millimeters (mm²) to square kilometers (km²)' },
  'm2': { id: 'm2', title: 'Square Meters', description: 'Convert square millimeters (mm²) to square meters (m²)' },
  'cm2': { id: 'cm2', title: 'Square Centimeters', description: 'Convert square millimeters (mm²) to square centimeters (cm²)' },
  'ha': { id: 'ha', title: 'Hectares', description: 'Convert square millimeters (mm²) to hectares (ha)' },
  'acre': { id: 'acre', title: 'Acres', description: 'Convert square millimeters (mm²) to acres (ac)' },
  'mi2': { id: 'mi2', title: 'Square Miles', description: 'Convert square millimeters (mm²) to square miles (mi²)' },
  'yd2': { id: 'yd2', title: 'Square Yards', description: 'Convert square millimeters (mm²) to square yards (yd²)' },
  'ft2': { id: 'ft2', title: 'Square Feet', description: 'Convert square millimeters (mm²) to square feet (ft²)' },
  'in2': { id: 'in2', title: 'Square Inches', description: 'Convert square millimeters (mm²) to square inches (in²)' },
};

type Props = {
  type: keyof typeof unitMappings;
};

function formatResult(value: number): string {
  if (Math.abs(value) < 0.000001 || Math.abs(value) > 999999) {
    return value.toExponential(6);
  }
  return value.toFixed(6);
}

export default function SquareMillimeterConverter({ type }: Props) {
  const [result, setResult] = React.useState<ConversionResult | null>(null);
  const targetUnit = unitMappings[type];
  const fromUnit = areaUnits.find(u => u.id === 'mm2')!;
  const toUnit = areaUnits.find(u => u.id === targetUnit.id)!;

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertArea(value, from, to);
    setResult({ from, to, value, result });

    // Save to history
    const history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
    const newHistory = [
      {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        from,
        to,
        value,
        result,
        timestamp: new Date(),
        type: 'area',
      },
      ...history,
    ].slice(0, 10);
    localStorage.setItem('conversionHistory', JSON.stringify(newHistory));
  }, []);

  React.useEffect(() => {
    handleConvert('mm2', targetUnit.id, 1);
  }, [targetUnit.id, handleConvert]);

  return (
    <>
      <SEO 
        title={`Square Millimeters to ${targetUnit.title} | Convert mm² to ${toUnit.symbol}`}
        description={`Free online area converter. ${targetUnit.description}. Quick and accurate conversion with metric and imperial units.`}
        type="area"
      />
      
      <ConversionLayout
        title={`Square Millimeters to ${targetUnit.title} Converter`}
        description={targetUnit.description}
        type="area"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={[fromUnit, toUnit]}
            onConvert={handleConvert}
            initialFrom="mm2"
            initialTo={targetUnit.id}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">{result.value} mm²</span>
                <span className="mx-3">=</span>
                <span className="font-bold text-2xl text-indigo-600">
                  {formatResult(result.result)} {toUnit.symbol}
                </span>
              </p>
            </div>
          )}
        </div>
      </ConversionLayout>
    </>
  );
}