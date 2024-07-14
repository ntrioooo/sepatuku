import React from 'react';

export default function Input({ name, value, type, onChange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      className="rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm my-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
