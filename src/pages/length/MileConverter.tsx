import React from 'react';
import ConversionLayout from '../../components/ConversionLayout';
import ConversionForm from '../../components/ConversionForm';
import SEO from '../../components/SEO';
import { lengthUnits, convertLength } from '../../data/lengthConversions';
import type { ConversionResult } from '../../types';

const unitMappings = {
  kilometers: { id: 'km', title: 'Kilometers', description: 'Convert miles (mi) to kilometers (km)' },
  meters: { id: 'm', title: 'Meters', description: 'Convert miles (mi) to meters (m)' },
  centimeters: { id: 'cm', title: 'Centimeters', description: 'Convert miles (mi) to centimeters (cm)' },
  millimeters: { id: 'mm', title: 'Millimeters', description: 'Convert miles (mi) to millimeters (mm)' },
  micrometers: { id: 'μm', title: 'Micrometers', description: 'Convert miles (mi) to micrometers (μm)' },
  nanometers: { id: 'nm', title: 'Nanometers', description: 'Convert miles (mi) to nanometers (nm)' },
  yards: { id: 'yd', title: 'Yards', description: 'Convert miles (mi) to yards (yd)' },
  feet: { id: 'ft', title: 'Feet', description: 'Convert miles (mi) to feet (ft)' },
  inches: { id: 'in', title: 'Inches', description: 'Convert miles (mi) to inches (in)' },
  'nautical-miles': { id: 'nmi', title: 'Nautical Miles', description: 'Convert miles (mi) to nautical miles (nmi)' },
};

type Props = {
  type: keyof typeof unitMappings;
};

function formatResult(value: number): string {
  if (Math.abs(value) < 0.000001) {
    return value.toExponential(6);
  }
  return value.toFixed(6);
}

export default function MileConverter({ type }: Props) {
  const [result, setResult] = React.useState<ConversionResult | null>(null);
  const targetUnit = unitMappings[type];
  const fromUnit = lengthUnits.find(u => u.id === 'mi')!;
  const toUnit = lengthUnits.find(u => u.id === targetUnit.id)!;

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertLength(value, from, to);
    setResult({ from, to, value, result });
  }, []);

  React.useEffect(() => {
    handleConvert('mi', targetUnit.id, 1);
  }, [targetUnit.id, handleConvert]);

  return (
    <>
      <SEO 
        title={`Miles to ${targetUnit.title} | Convert mi to ${toUnit.symbol}`}
        description={`Free online length converter. ${targetUnit.description}. Quick and accurate conversion with metric and imperial units.`}
        type="length"
      />
      
      <ConversionLayout
        title={`Miles to ${targetUnit.title} Converter`}
        description={targetUnit.description}
        type="length"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={[fromUnit, toUnit]}
            onConvert={handleConvert}
            initialFrom="mi"
            initialTo={targetUnit.id}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">{result.value} mi</span>
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