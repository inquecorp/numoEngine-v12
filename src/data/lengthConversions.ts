export type LengthUnit = {
  id: string;
  name: string;
  symbol: string;
  toBase: number; // conversion factor to meters
};

export const lengthUnits: LengthUnit[] = [
  { id: 'km', name: 'Kilometers', symbol: 'km', toBase: 1000 },
  { id: 'm', name: 'Meters', symbol: 'm', toBase: 1 },
  { id: 'cm', name: 'Centimeters', symbol: 'cm', toBase: 0.01 },
  { id: 'mm', name: 'Millimeters', symbol: 'mm', toBase: 0.001 },
  { id: 'μm', name: 'Micrometers', symbol: 'μm', toBase: 0.000001 },
  { id: 'nm', name: 'Nanometers', symbol: 'nm', toBase: 0.000000001 },
  { id: 'mi', name: 'Miles', symbol: 'mi', toBase: 1609.344 },
  { id: 'yd', name: 'Yards', symbol: 'yd', toBase: 0.9144 },
  { id: 'ft', name: 'Feet', symbol: 'ft', toBase: 0.3048 },
  { id: 'in', name: 'Inches', symbol: 'in', toBase: 0.0254 },
  { id: 'nmi', name: 'Nautical Miles', symbol: 'nmi', toBase: 1852 },
];

export type ConversionSuggestion = {
  from: string;
  to: string;
  title: string;
};

const commonConversions = {
  kilometers: [
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  meters: [
    { to: 'kilometers', unit: 'km' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  centimeters: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  millimeters: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  micrometers: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  nanometers: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  miles: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  yards: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'feet', unit: 'ft' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  feet: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'inches', unit: 'in' },
    { to: 'nautical-miles', unit: 'nmi' }
  ],
  inches: [
    { to: 'kilometers', unit: 'km' },
    { to: 'meters', unit: 'm' },
    { to: 'centimeters', unit: 'cm' },
    { to: 'millimeters', unit: 'mm' },
    { to: 'micrometers', unit: 'μm' },
    { to: 'nanometers', unit: 'nm' },
    { to: 'miles', unit: 'mi' },
    { to: 'yards', unit: 'yd' },
    { to: 'feet', unit: 'ft' },
    { to: 'nautical-miles', unit: 'nmi' }
  ]
};

export function generateConversionSuggestions(currentFrom: string, currentTo: string): ConversionSuggestion[] {
  const suggestions: ConversionSuggestion[] = [];

  Object.entries(commonConversions).forEach(([from, conversions]) => {
    conversions.forEach(({ to, unit }) => {
      suggestions.push({
        from,
        to,
        title: `${from.charAt(0).toUpperCase() + from.slice(1)} to ${to.charAt(0).toUpperCase() + to.slice(1)}`,
      });
    });
  });

  return suggestions;
}

export function convertLength(value: number, from: string, to: string): number {
  const fromUnit = lengthUnits.find(u => u.id === from);
  const toUnit = lengthUnits.find(u => u.id === to);

  if (!fromUnit || !toUnit) return value;

  // Convert to base unit (meters)
  const baseValue = value * fromUnit.toBase;
  
  // Convert from base unit to target unit
  const result = baseValue / toUnit.toBase;

  // Handle potential floating-point precision issues
  return Number(result.toPrecision(15));
}