import React from 'react';
import { Link } from 'react-router-dom';
import LayoutHome from '../LayoutHome';
import NavBrand from '../NavBrand.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../redux/auth/actions.js';

export default function Navbar() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(userLogout());
  };
  return (
    <nav className="bg-white w-full border-b border-gray-200">
      <LayoutHome>
        <div className="flex flex-wrap items-center justify-between space-x-12">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              SepatuKu
            </span>
          </a>
          <div className="relative flex-grow md:flex md:items-center md:w-auto">
            <input
              type="text"
              placeholder="Search any products here..."
              className="border border-gray-200 rounded-md py-2 px-2 w-full text-sm"
            />
            <svg
              className="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {!token ? (
              <>
                <Link to="/login">
                  <p className="text-black font-medium rounded-lg text-sm px-2 py-2 text-center hover:text-green-500">
                    Login
                  </p>
                </Link>
                <Link to="/register">
                  <p className="text-black font-medium rounded-lg text-sm px-2 py-2 text-center hover:text-green-500">
                    Register
                  </p>
                </Link>
              </>
            ) : (
              <button onClick={handleLogout}>
                <p className="text-black font-medium rounded-lg text-sm px-2 py-2 text-center hover:text-green-500">
                  Logout
                </p>
              </button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        <NavBrand />
      </LayoutHome>
    </nav>
  );
}
