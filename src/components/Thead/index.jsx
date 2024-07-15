import React from 'react';

export default function THead({ text }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr className="px-6 py-3">
        {text.map((text, index) => {
          return <th key={index}>{text}</th>;
        })}
      </tr>
    </thead>
  );
}
