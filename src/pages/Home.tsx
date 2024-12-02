import React from 'react';
import { 
  Ruler, Weight, Thermometer, Clock, Zap, Gauge, 
  Square, Box, Waves, Database, Upload, Sun, 
  Radio, HardDrive, Activity
} from 'lucide-react';
import ConversionCard from '../components/ConversionCard';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';
import type { ConversionType } from '../types';

const conversions: ConversionType[] = [
  {
    id: 'length',
    name: 'Length Converter',
    icon: 'Ruler',
    description: 'Convert between meters, kilometers, miles, and more',
  },
  {
    id: 'area',
    name: 'Area Converter',
    icon: 'Square',
    description: 'Convert between square meters, acres, hectares, and more',
  },
  {
    id: 'volume',
    name: 'Volume Converter',
    icon: 'Box',
    description: 'Convert between liters, gallons, cubic meters, and more',
  },
  {
    id: 'weight',
    name: 'Mass Converter',
    icon: 'Weight',
    description: 'Convert between kilograms, pounds, ounces, and more',
  },
  {
    id: 'temperature',
    name: 'Temperature Converter',
    icon: 'Thermometer',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin',
  },
  {
    id: 'pressure',
    name: 'Pressure Converter',
    icon: 'Activity',
    description: 'Convert between Pascal, bar, PSI, and more',
  },
  {
    id: 'energy',
    name: 'Energy Converter',
    icon: 'Zap',
    description: 'Convert between joules, calories, kilowatt-hours, and more',
  },
  {
    id: 'power',
    name: 'Power Converter',
    icon: 'Zap',
    description: 'Convert between watts, horsepower, and more',
  },
  {
    id: 'speed',
    name: 'Speed Converter',
    icon: 'Gauge',
    description: 'Convert between m/s, km/h, mph, and more',
  },
  {
    id: 'frequency',
    name: 'Frequency Converter',
    icon: 'Waves',
    description: 'Convert between hertz, kilohertz, megahertz, and more',
  },
  {
    id: 'digital-storage',
    name: 'Digital Storage Converter',
    icon: 'HardDrive',
    description: 'Convert between bytes, kilobytes, megabytes, and more',
  },
  {
    id: 'time',
    name: 'Time Converter',
    icon: 'Clock',
    description: 'Convert between seconds, minutes, hours, and more',
  },
  {
    id: 'radiation',
    name: 'Radiation Dose Converter',
    icon: 'Radio',
    description: 'Convert between gray, rad, sievert, and more',
  },
  {
    id: 'data-transfer',
    name: 'Data Transfer Rate',
    icon: 'Upload',
    description: 'Convert between bps, Kbps, Mbps, and more',
  },
  {
    id: 'luminous-flux',
    name: 'Luminous Flux Converter',
    icon: 'Sun',
    description: 'Convert between lumen, candela, lux, and more',
  },
];

export default function Home() {
  return (
    <>
      <SEO 
        title="Free Online Unit Converter & Calculator"
        description="Fast, accurate unit conversions for length, weight, temperature, time, energy, speed, and more. Free online converter with comprehensive unit support."
        type="home"
        canonicalUrl="https://numoengine.com"
      />

      <div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Universal Unit Converter
          </h1>
          <p className="text-xl text-gray-600">
            Fast, accurate conversions for all your needs
          </p>
        </div>

        <AdPlaceholder id="home-top" className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversions.map((conversion) => (
            <ConversionCard key={conversion.id} conversion={conversion} />
          ))}
        </div>

        <AdPlaceholder id="home-bottom" className="mt-8" />
      </div>
    </>
  );
}