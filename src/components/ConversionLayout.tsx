import React from 'react';
import { ArrowLeft, History } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from './AdPlaceholder';
import ConversionHistory from './ConversionHistory';
import type { ConversionHistory as HistoryType } from '../types';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
  type: string;
};

export default function ConversionLayout({ title, description, children, type }: Props) {
  const [history, setHistory] = React.useState<HistoryType[]>(() => {
    const saved = localStorage.getItem('conversionHistory');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <div>
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Converters
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <AdPlaceholder id="converter-top" className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {children}
          </div>
        </div>
        
        <div>
          <ConversionHistory history={history} type={type} />
          <AdPlaceholder id="converter-sidebar" className="mt-8" />
        </div>
      </div>

      <AdPlaceholder id="converter-bottom" className="mt-8" />
    </div>
  );
}