export type ConversionType = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type ConversionHistory = {
  id: string;
  from: string;
  to: string;
  value: number;
  result: number;
  timestamp: Date;
  type: string;
};

export type Unit = {
  id: string;
  name: string;
  symbol: string;
  type: string;
};

export type ConversionResult = {
  from: string;
  to: string;
  value: number;
  result: number;
};

export type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

export type AreaUnit = {
  id: string;
  name: string;
  symbol: string;
  toBase: number;
  seoName: string;
};