import type { MetaTag } from '../types';

export function generateAreaConverterMeta(fromUnit: string, toUnit: string, fromSymbol: string, toSymbol: string): MetaTag[] {
  const title = `${fromUnit} to ${toUnit} | Convert ${fromSymbol} to ${toSymbol}`;
  const description = `Free online area converter. Convert ${fromUnit.toLowerCase()} (${fromSymbol}) to ${toUnit.toLowerCase()} (${toSymbol}). Quick and accurate area conversions with metric and imperial units.`;
  
  return [
    { name: 'description', content: description },
    { name: 'keywords', content: `${fromUnit.toLowerCase()}, ${toUnit.toLowerCase()}, area converter, ${fromSymbol} to ${toSymbol}, area conversion calculator, metric conversion, imperial units, square meters, square feet, acres, hectares` },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'robots', content: 'index, follow' },
  ];
}

export function generateStructuredData(fromUnit: string, toUnit: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${fromUnit} to ${toUnit} Converter`,
    applicationCategory: 'CalculatorApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}