import React from 'react';
import CardPopular from '../CardPopular';
import LayoutHome from '../LayoutHome';
import ImageSamba from '../../assets/images/samba.png';

import { MdArrowOutward } from 'react-icons/md';

export default function NikeBrand() {
  return (
    <LayoutHome>
      <p className="text-2xl font-bold mb-2 mt-5">Nike</p>
      <div className="flex items-center mb-4">
        <span className="border-t-2 border-black w-8 mr-2"></span>
        <p className="text-sm font-medium text-gray-600">
          Our Trending Shoe for Nike
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <CardPopular>
          <a href="#" className="justify-center flex">
            <img
              className="rounded-t-lg max-w-[200px] pb-16 rotate-[-20deg]"
              src={ImageSamba}
              alt="product image"
            />
          </a>
          <div className="px-3 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Adidas Samba OG White
              </h5>
            </a>
            <div className="flex-col items-center justify-between">
              <span className="text-md font-medium text-gray-500">
                IDR 2.500.000
              </span>
              <a
                href="#"
                className="text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-900 rounded-md text-lg p-1 flex items-center justify-center mt-2"
              >
                Buy Now
              </a>
            </div>
          </div>
        </CardPopular>
        <CardPopular>
          <a href="#" className="justify-center flex">
            <img
              className="rounded-t-lg max-w-[200px] pb-16 rotate-[-20deg]"
              src={ImageSamba}
              alt="product image"
            />
          </a>
          <div className="px-3 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Adidas Samba OG White
              </h5>
            </a>
            <div className="flex-col items-center justify-between">
              <span className="text-md font-medium text-gray-500">
                IDR 2.500.000
              </span>
              <a
                href="#"
                className="text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-900 rounded-md text-lg p-1 flex items-center justify-center mt-2"
              >
                Buy Now
              </a>
            </div>
          </div>
        </CardPopular>
        <CardPopular>
          <a href="#" className="justify-center flex">
            <img
              className="rounded-t-lg max-w-[200px] pb-16 rotate-[-20deg]"
              src={ImageSamba}
              alt="product image"
            />
          </a>
          <div className="px-3 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Adidas Samba OG White
              </h5>
            </a>
            <div className="flex-col items-center justify-between">
              <span className="text-md font-medium text-gray-500">
                IDR 2.500.000
              </span>
              <a
                href="#"
                className="text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-900 rounded-md text-lg p-1 flex items-center justify-center mt-2"
              >
                Buy Now
              </a>
            </div>
          </div>
        </CardPopular>
        <CardPopular>
          <a href="#" className="justify-center flex">
            <img
              className="rounded-t-lg max-w-[200px] pb-16 rotate-[-20deg]"
              src={ImageSamba}
              alt="product image"
            />
          </a>
          <div className="px-3 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Adidas Samba OG White
              </h5>
            </a>
            <div className="flex-col items-center justify-between">
              <span className="text-md font-medium text-gray-500">
                IDR 2.500.000
              </span>
              <a
                href="#"
                className="text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-900 rounded-md text-lg p-1 flex items-center justify-center mt-2"
              >
                Buy Now
              </a>
            </div>
          </div>
        </CardPopular>
        <CardPopular>
          <a href="#" className="justify-center flex">
            <img
              className="rounded-t-lg max-w-[200px] pb-16 rotate-[-20deg]"
              src={ImageSamba}
              alt="product image"
            />
          </a>
          <div className="px-3 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Adidas Samba OG White
              </h5>
            </a>
            <div className="flex-col items-center justify-between">
              <span className="text-md font-medium text-gray-500">
                IDR 2.500.000
              </span>
              <a
                href="#"
                className="text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-900 rounded-md text-lg p-1 flex items-center justify-center mt-2"
              >
                Buy Now
              </a>
            </div>
          </div>
        </CardPopular>
      </div>
    </LayoutHome>
  );
}
