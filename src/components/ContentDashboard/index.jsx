import React from 'react';
import DashboardAdmin from '../DashboardAdmin';
import Sidebar from '../Sidebar';
import CardDashboard from '../CardDashboard';
import { GiConverseShoe } from 'react-icons/gi';
import TableDashboard from '../TableDashboard';

export default function DashboardContent() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-200">
        <div className="flex items-center mb-4 justify-between">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex space-x-4 mt-[50px]">
          <CardDashboard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            numberItem={200}
            title="Total items"
            icon={<GiConverseShoe className="text-xl" />}
          />
          <CardDashboard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            numberItem={200}
            title="Total items"
            icon={<GiConverseShoe className="text-xl" />}
          />
          <CardDashboard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            numberItem={200}
            title="Total items"
            icon={<GiConverseShoe className="text-xl" />}
          />
        </div>
        <TableDashboard />
      </main>
    </div>
  );
}
