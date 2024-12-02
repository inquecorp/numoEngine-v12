import React from 'react';
import ConversionLayout from '../../components/ConversionLayout';
import ConversionForm from '../../components/ConversionForm';
import SEO from '../../components/SEO';
import { lengthUnits, convertLength } from '../../data/lengthConversions';
import type { ConversionResult } from '../../types';

const unitMappings = {
  kilometers: { id: 'km', title: 'Kilometers', description: 'Convert meters (m) to kilometers (km)' },
  centimeters: { id: 'cm', title: 'Centimeters', description: 'Convert meters (m) to centimeters (cm)' },
  millimeters: { id: 'mm', title: 'Millimeters', description: 'Convert meters (m) to millimeters (mm)' },
  micrometers: { id: 'μm', title: 'Micrometers', description: 'Convert meters (m) to micrometers (μm)' },
  nanometers: { id: 'nm', title: 'Nanometers', description: 'Convert meters (m) to nanometers (nm)' },
  miles: { id: 'mi', title: 'Miles', description: 'Convert meters (m) to miles (mi)' },
  yards: { id: 'yd', title: 'Yards', description: 'Convert meters (m) to yards (yd)' },
  feet: { id: 'ft', title: 'Feet', description: 'Convert meters (m) to feet (ft)' },
  inches: { id: 'in', title: 'Inches', description: 'Convert meters (m) to inches (in)' },
  'nautical-miles': { id: 'nmi', title: 'Nautical Miles', description: 'Convert meters (m) to nautical miles (nmi)' },
};

type Props = {
  type: keyof typeof unitMappings;
};

export default function MeterConverter({ type }: Props) {
  const [result, setResult] = React.useState<ConversionResult | null>(null);
  const targetUnit = unitMappings[type];
  const fromUnit = lengthUnits.find(u => u.id === 'm')!;
  const toUnit = lengthUnits.find(u => u.id === targetUnit.id)!;

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertLength(value, from, to);
    setResult({ from, to, value, result });
  }, []);

  React.useEffect(() => {
    handleConvert('m', targetUnit.id, 1);
  }, [targetUnit.id, handleConvert]);

  return (
    <>
      <SEO 
        title={`Meters to ${targetUnit.title} | Convert m to ${toUnit.symbol}`}
        description={`Free online length converter. ${targetUnit.description}. Quick and accurate conversion with metric and imperial units.`}
        type="length"
      />
      
      <ConversionLayout
        title={`Meters to ${targetUnit.title} Converter`}
        description={targetUnit.description}
        type="length"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={[fromUnit, toUnit]}
            onConvert={handleConvert}
            initialFrom="m"
            initialTo={targetUnit.id}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">{result.value} m</span>
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