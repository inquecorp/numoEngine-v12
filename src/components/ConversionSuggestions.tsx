import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ConversionSuggestion } from '../data/lengthConversions';

type Props = {
  suggestions: ConversionSuggestion[];
  type: string;
};

export default function ConversionSuggestions({ suggestions, type }: Props) {
  if (suggestions.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Common Conversions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion, index) => (
          <Link
            key={index}
            to={`/convert/length/${suggestion.from}-to-${suggestion.to}`}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-gray-600">{suggestion.title}</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}