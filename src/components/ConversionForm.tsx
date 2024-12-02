import React from 'react';
import type { Unit } from '../types';

type Props = {
  units: Unit[];
  onConvert: (from: string, to: string, value: number) => void;
  initialFrom?: string;
  initialTo?: string;
};

export default function ConversionForm({ units, onConvert, initialFrom, initialTo }: Props) {
  const [value, setValue] = React.useState<string>('1');
  const [fromUnit, setFromUnit] = React.useState<string>(initialFrom || units[0].id);
  const [toUnit, setToUnit] = React.useState<string>(initialTo || units[1].id);

  React.useEffect(() => {
    if (initialFrom) setFromUnit(initialFrom);
    if (initialTo) setToUnit(initialTo);
  }, [initialFrom, initialTo]);

  // Perform conversion whenever any input changes
  React.useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      onConvert(fromUnit, toUnit, numValue);
    }
  }, [value, fromUnit, toUnit, onConvert]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="value" className="block text-sm font-medium text-gray-700">
          Value
        </label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter a number"
          min="0"
          step="any"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fromUnit" className="block text-sm font-medium text-gray-700">
            From
          </label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="toUnit" className="block text-sm font-medium text-gray-700">
            To
          </label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}