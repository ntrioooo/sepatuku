import React from 'react';

export default function Button({
  className,
  children,
  action,
  disabled,
  loading,
  type,
}) {
  return (
    <button
      className={className}
      onClick={action}
      disabled={disabled}
      type={type}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
