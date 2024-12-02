import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Weight, Thermometer, Clock, Zap, Gauge, 
  Square, Box, Waves, Database, Upload, Sun, Radio, HardDrive, Activity } from 'lucide-react';
import type { ConversionType } from '../types';

const iconMap = {
  Ruler,
  Weight,
  Thermometer,
  Clock,
  Zap,
  Gauge,
  Square,
  Box,
  Waves,
  Database,
  Upload,
  Sun,
  Radio,
  HardDrive,
  Activity
};

type Props = {
  conversion: ConversionType;
};

export default function ConversionCard({ conversion }: Props) {
  const Icon = iconMap[conversion.icon as keyof typeof iconMap];

  return (
    <Link
      to={`/convert/${conversion.id}`}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Icon className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{conversion.name}</h3>
            <p className="text-sm text-gray-500">{conversion.description}</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </Link>
  );
}