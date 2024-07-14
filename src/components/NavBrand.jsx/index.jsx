import React from 'react';

export default function NavBrand() {
  return (
    <div className="flex justify-center mt-4 space-x-5 text-sm">
      <p className="hover:text-red-500 cursor-pointer">Adidas</p>
      <p className="hover:text-red-500 cursor-pointer">Nike</p>
      <p className="hover:text-red-500 cursor-pointer">Converse</p>
      <p className="hover:text-red-500 cursor-pointer">New Balance</p>
      <p className="hover:text-red-500 cursor-pointer">Vans</p>
    </div>
  );
}
