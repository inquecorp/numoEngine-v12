import type { AreaUnit } from '../types';

export const areaUnits: AreaUnit[] = [
  { id: 'km2', name: 'Square Kilometers', symbol: 'km²', toBase: 1000000, seoName: 'Square Kilometers' },
  { id: 'm2', name: 'Square Meters', symbol: 'm²', toBase: 1, seoName: 'Square Meters' },
  { id: 'cm2', name: 'Square Centimeters', symbol: 'cm²', toBase: 0.0001, seoName: 'Square Centimeters' },
  { id: 'mm2', name: 'Square Millimeters', symbol: 'mm²', toBase: 0.000001, seoName: 'Square Millimeters' },
  { id: 'ha', name: 'Hectares', symbol: 'ha', toBase: 10000, seoName: 'Hectares' },
  { id: 'acre', name: 'Acres', symbol: 'ac', toBase: 4046.86, seoName: 'Acres' },
  { id: 'mi2', name: 'Square Miles', symbol: 'mi²', toBase: 2589988.11, seoName: 'Square Miles' },
  { id: 'yd2', name: 'Square Yards', symbol: 'yd²', toBase: 0.836127, seoName: 'Square Yards' },
  { id: 'ft2', name: 'Square Feet', symbol: 'ft²', toBase: 0.092903, seoName: 'Square Feet' },
  { id: 'in2', name: 'Square Inches', symbol: 'in²', toBase: 0.00064516, seoName: 'Square Inches' },
];

export function convertArea(value: number, from: string, to: string): number {
  const fromUnit = areaUnits.find(u => u.id === from);
  const toUnit = areaUnits.find(u => u.id === to);

  if (!fromUnit || !toUnit) return value;

  // Convert to base unit (square meters)
  const baseValue = value * fromUnit.toBase;
  
  // Convert from base unit to target unit
  const result = baseValue / toUnit.toBase;

  // Handle potential floating-point precision issues
  return Number(result.toPrecision(15));
}

export function getUnitById(id: string): AreaUnit | undefined {
  return areaUnits.find(unit => unit.id === id);
}