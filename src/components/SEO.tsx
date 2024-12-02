import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { MetaTag } from '../types';

type Props = {
  title: string;
  description: string;
  type: string;
  canonicalUrl?: string;
  additionalMeta?: MetaTag[];
  structuredData?: Record<string, any>;
};

export default function SEO({ 
  title, 
  description, 
  type, 
  canonicalUrl,
  additionalMeta = [],
  structuredData,
}: Props) {
  const siteName = 'numoEngine - Universal Unit Converter';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = 'https://numoengine.com';
  const url = canonicalUrl || `${baseUrl}/convert/${type}`;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: fullTitle,
    description,
    url,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const schema = structuredData || defaultSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}