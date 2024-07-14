import React from 'react';
import LayoutHome from '../LayoutHome';
import Button from '../Button';
import CardPopular from '../CardPopular';
import ImageSamba from '../../assets/images/samba.png';

import { MdArrowOutward } from 'react-icons/md';

export default function MainContent() {
  return (
    <LayoutHome>
      <div className="flex items-center space-x-8">
        <div className="flex-col w-1/4 space-y-2">
          <div className="flex items-center mb-4">
            <span className="border-t-2 border-black w-8 mr-2"></span>
            <p className="text-sm font-medium text-gray-600">
              Our Trending Shoe
            </p>
          </div>
          <p className="text-3xl font-bold mb-2">Most Popular Products</p>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Button className="bg-black text-white font-medium py-2 px-5 rounded hover:bg-gray-800 shadow-md shadow-gray-500">
            Explore
          </Button>
        </div>
        <div className="flex w-3/4 space-x-3">
          <CardPopular>
            <a href="#" className="justify-center flex">
              <img
                className="rounded-t-lg max-w-[250px] pb-16 rotate-[-20deg]"
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
                className="rounded-t-lg max-w-[250px] pb-16 rotate-[-20deg]"
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
                className="rounded-t-lg max-w-[250px] pb-16 rotate-[-20deg]"
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
      </div>
    </LayoutHome>
  );
}
