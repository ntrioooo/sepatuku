import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NavLinkAdmin({ action, children, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li>
      <a
        onClick={action}
        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
}
