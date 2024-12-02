import React from 'react';
import ConversionLayout from '../../components/ConversionLayout';
import ConversionForm from '../../components/ConversionForm';
import SEO from '../../components/SEO';
import { lengthUnits, convertLength } from '../../data/lengthConversions';
import type { ConversionResult } from '../../types';

const unitMappings = {
  kilometers: { id: 'km', title: 'Kilometers', description: 'Convert feet (ft) to kilometers (km)' },
  meters: { id: 'm', title: 'Meters', description: 'Convert feet (ft) to meters (m)' },
  centimeters: { id: 'cm', title: 'Centimeters', description: 'Convert feet (ft) to centimeters (cm)' },
  millimeters: { id: 'mm', title: 'Millimeters', description: 'Convert feet (ft) to millimeters (mm)' },
  micrometers: { id: 'μm', title: 'Micrometers', description: 'Convert feet (ft) to micrometers (μm)' },
  nanometers: { id: 'nm', title: 'Nanometers', description: 'Convert feet (ft) to nanometers (nm)' },
  miles: { id: 'mi', title: 'Miles', description: 'Convert feet (ft) to miles (mi)' },
  yards: { id: 'yd', title: 'Yards', description: 'Convert feet (ft) to yards (yd)' },
  inches: { id: 'in', title: 'Inches', description: 'Convert feet (ft) to inches (in)' },
  'nautical-miles': { id: 'nmi', title: 'Nautical Miles', description: 'Convert feet (ft) to nautical miles (nmi)' },
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

export default function FeetConverter({ type }: Props) {
  const [result, setResult] = React.useState<ConversionResult | null>(null);
  const targetUnit = unitMappings[type];
  const fromUnit = lengthUnits.find(u => u.id === 'ft')!;
  const toUnit = lengthUnits.find(u => u.id === targetUnit.id)!;

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertLength(value, from, to);
    setResult({ from, to, value, result });
  }, []);

  React.useEffect(() => {
    handleConvert('ft', targetUnit.id, 1);
  }, [targetUnit.id, handleConvert]);

  return (
    <>
      <SEO 
        title={`Feet to ${targetUnit.title} | Convert ft to ${toUnit.symbol}`}
        description={`Free online length converter. ${targetUnit.description}. Quick and accurate conversion with metric and imperial units.`}
        type="length"
      />
      
      <ConversionLayout
        title={`Feet to ${targetUnit.title} Converter`}
        description={targetUnit.description}
        type="length"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={[fromUnit, toUnit]}
            onConvert={handleConvert}
            initialFrom="ft"
            initialTo={targetUnit.id}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">{result.value} ft</span>
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