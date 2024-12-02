import React from 'react';
import ConversionLayout from '../../components/ConversionLayout';
import ConversionForm from '../../components/ConversionForm';
import SEO from '../../components/SEO';
import { lengthUnits, convertLength } from '../../data/lengthConversions';
import type { ConversionResult } from '../../types';

const unitMappings = {
  meters: { id: 'm', title: 'Meters', description: 'Convert kilometers (km) to meters (m)' },
  centimeters: { id: 'cm', title: 'Centimeters', description: 'Convert kilometers (km) to centimeters (cm)' },
  millimeters: { id: 'mm', title: 'Millimeters', description: 'Convert kilometers (km) to millimeters (mm)' },
  micrometers: { id: 'μm', title: 'Micrometers', description: 'Convert kilometers (km) to micrometers (μm)' },
  nanometers: { id: 'nm', title: 'Nanometers', description: 'Convert kilometers (km) to nanometers (nm)' },
  miles: { id: 'mi', title: 'Miles', description: 'Convert kilometers (km) to miles (mi)' },
  yards: { id: 'yd', title: 'Yards', description: 'Convert kilometers (km) to yards (yd)' },
  feet: { id: 'ft', title: 'Feet', description: 'Convert kilometers (km) to feet (ft)' },
  inches: { id: 'in', title: 'Inches', description: 'Convert kilometers (km) to inches (in)' },
  'nautical-miles': { id: 'nmi', title: 'Nautical Miles', description: 'Convert kilometers (km) to nautical miles (nmi)' },
};

type Props = {
  type: keyof typeof unitMappings;
};

export default function KilometerConverter({ type }: Props) {
  const [result, setResult] = React.useState<ConversionResult | null>(null);
  const targetUnit = unitMappings[type];
  const fromUnit = lengthUnits.find(u => u.id === 'km')!;
  const toUnit = lengthUnits.find(u => u.id === targetUnit.id)!;

  const handleConvert = React.useCallback((from: string, to: string, value: number) => {
    const result = convertLength(value, from, to);
    setResult({ from, to, value, result });
  }, []);

  React.useEffect(() => {
    handleConvert('km', targetUnit.id, 1);
  }, [targetUnit.id, handleConvert]);

  return (
    <>
      <SEO 
        title={`Kilometers to ${targetUnit.title} | Convert km to ${toUnit.symbol}`}
        description={`Free online length converter. ${targetUnit.description}. Quick and accurate conversion with metric and imperial units.`}
        type="length"
      />
      
      <ConversionLayout
        title={`Kilometers to ${targetUnit.title} Converter`}
        description={targetUnit.description}
        type="length"
      >
        <div className="space-y-8">
          <ConversionForm 
            units={[fromUnit, toUnit]}
            onConvert={handleConvert}
            initialFrom="km"
            initialTo={targetUnit.id}
          />

          {result && (
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-center text-xl">
                <span className="text-gray-600">{result.value} km</span>
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