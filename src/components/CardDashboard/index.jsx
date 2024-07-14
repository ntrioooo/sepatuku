import React from 'react';

export default function CardDashboard({
  title,
  numberItem,
  description,
  icon,
}) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex space-x-3">
        <div className="justify-center mt-1">{icon}</div>
        <div className="flex-col space-y-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-3xl font-bold text-blue-500">{numberItem}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
