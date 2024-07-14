import React from 'react';
import LayoutHome from '../LayoutHome';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <LayoutHome>
        <div className="mx-auto flex justify-between items-start space-x-4">
          <div className="w-full mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">SepatuKu</h2>
            <p className="text-gray-400">
              Kami menyediakan berbagai macam sepatu berkualitas dengan harga
              terjangkau. Temukan sepatu impianmu hanya di SepatuKu.
            </p>
            <div className="flex space-x-3 mt-5">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="w-full mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">
              Subscribe to our News letter
            </h2>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 mb-4 rounded text-black w-3/4"
              />
            </form>
          </div>

          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-gray-400">
            © 2024 SepatuKu. All rights reserved.
          </p>
        </div>
      </LayoutHome>
    </footer>
  );
}
