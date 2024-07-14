import React from 'react';

export default function CardPopular({ children }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow py-3 px-2">
      {children}
    </div>
  );
}
