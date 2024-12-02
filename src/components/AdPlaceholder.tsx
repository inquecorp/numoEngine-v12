import React from 'react';

type Props = {
  id: string;
  className?: string;
};

export default function AdPlaceholder({ id, className = '' }: Props) {
  return (
    <div
      id={id}
      className={`bg-gray-100 rounded-lg p-4 text-center text-gray-400 ${className}`}
    >
      Ad Space ({id})
    </div>
  );
}