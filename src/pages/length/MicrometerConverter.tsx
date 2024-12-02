import React from 'react';
import ConversionLayout from '../../components/ConversionLayout';
import ConversionForm from '../../components/ConversionForm';
import SEO from '../../components/SEO';
import { lengthUnits, convertLength } from '../../data/lengthConversions';
import type { ConversionResult } from '../../types';

const unitMappings = {
  kilometers: { id: 'km', title: 'Kilometers', description: 'Convert micrometers (μm) to kilometers (km)' },
  meters: { id: 'm', title: 'Meters', description: 'Convert micrometers (μm) to meters (m)' },
  centimeters: { id: 'cm', title: 'Centimeters', description: 'Convert micrometers (μm) to centimeters (cm)' },
  millimeters: { id: 'mm', title: 'Millimeters', description: 'Convert micrometers (μm) to millimeters (mm)' },
  nanometers: { id: 'nm', title: 'Nanometers', description: 'Convert micrometers (μm) to nanometers (nm)' },
  miles: { id: 'mi', title: 'Miles', description: 'Convert micrometers (μm) to miles (mi)' },
  yards: { id: 'yd', title: 'Yards', description: 'Convert micrometers (μm) to yards (yd)' },
  feet: { id: 'ft', title: 'Feet', description: 'Convert micrometers (μm) to feet (ft)' },
  inches: { id: 'in', title: 'Inches', description: 'Convert micrometers (μm) to inches (in)' },
  'nautical-miles': { id: 'nmi', title: 'Nautical Miles', description: 'Convert micrometers (μm) to nautical miles (nmi)' },
};

type Props = {
  type: keyof typeof unitMappings;
};

export default function MicrometerConverter({ type }: Props) {
  const [result, setResult] = React.useState<ConversionResult | null>(null);
  const targetUnit = unitMappings[type];
  const fromUnit = lengthUnits.find(u => u.id === 'μm')!;
  const toUnit = lengthUnits.find(u => u.id === targetUnit.id)!;

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertLength(value, from, to);
    setResult({ from, to, value, result });
  }, []);

  React.useEffect(() => {
    handleConvert('μm', targetUnit.id, 1);
  }, [targetUnit.id, handleConvert]);

  return (
    <>
      <SEO 
        title={`Micrometers to ${targetUnit.title} | Convert μm to ${toUnit.symbol}`}
        description={`Free online length converter. ${targetUnit.description}. Quick and accurate conversion with metric and imperial units.`}
        type="length"
      />
      
      <ConversionLayout
        title={`Micrometers to ${targetUnit.title} Converter`}
        description={targetUnit.description}
        type="length"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={[fromUnit, toUnit]}
            onConvert={handleConvert}
            initialFrom="μm"
            initialTo={targetUnit.id}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">{result.value} μm</span>
                <span className="mx-3">=</span>
                <span className="font-bold text-2xl text-indigo-600">
                  {result.result.toFixed(6)} {toUnit.symbol}
                </span>
              </p>
            </div>
          )}
        </div>
      </ConversionLayout>
    </>
  );
}