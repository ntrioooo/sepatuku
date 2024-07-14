import React from 'react';
import NavLinkAdmin from '../NavLinkAdmin';
import { useNavigate } from 'react-router-dom';
import ImageProfile from '../../assets/images/image-profile.jpg';
import { MdDashboard, MdCategory } from 'react-icons/md';
import { RiBillLine } from 'react-icons/ri';
import { GiConverseShoe } from 'react-icons/gi';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <nav>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full p-6 overflow-y-auto bg-gray-5">
          <div className="p-2 space-y-2 mb-2">
            <div className="flex space-x-3 items-center">
              <img
                src={ImageProfile}
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <div className="flex-col">
                <p className="font-semibold text-gray-900">Admin Satu</p>
                <p className="font-light text-gray-500">Admin</p>
              </div>
            </div>
          </div>
          <hr />
          <ul className="space-y-4 font-medium mt-8">
            <NavLinkAdmin action={() => navigate('/')}>
              <div className="flex space-x-2 items-center">
                <MdDashboard className="text-xl" />
                <p className="ms-2">Dashboard</p>
              </div>
            </NavLinkAdmin>
            <NavLinkAdmin>
              <div className="flex space-x-2 items-center">
                <RiBillLine className="text-xl" />
                <p className="ms-2">Transactions</p>
              </div>
            </NavLinkAdmin>

            <NavLinkAdmin>
              <div className="flex space-x-2 items-center">
                <GiConverseShoe className="text-xl" />
                <p className="ms-2">Items</p>
              </div>
            </NavLinkAdmin>
            <NavLinkAdmin action={() => navigate('/dashboard/merks')}>
              <div className="flex space-x-2 items-center">
                <MdCategory className="text-xl" />
                <p className="ms-2">Merks</p>
              </div>
            </NavLinkAdmin>
          </ul>
        </div>
      </aside>
    </nav>
  );
}
