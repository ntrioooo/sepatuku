import React from 'react';
import Input from '../Input';

export default function InputWithLabel({
  name,
  value,
  type,
  onChange,
  placeholder,
  label,
  className,
  htmlFor,
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={className}>
        {label}
      </label>
      <Input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
