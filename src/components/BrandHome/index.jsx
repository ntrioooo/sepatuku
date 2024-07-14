import React from 'react';
import LayoutHome from '../LayoutHome';
import AllShoes from '../../assets/images/all-shoes.png';

export default function BrandHome() {
  return (
    <LayoutHome>
      <div className="bg-background-brand h-full px-8 py-16 flex items-center space-x-12">
        <div className="w-[40%] space-y-4">
          <h1 className="text-2xl font-bold text-black font-inter">
            Spotlight On:
          </h1>
          <p className="text-5xl text-black font-bold font-inter">
            Getting trendier with sneakers.
          </p>
          <p className="text-md text-black font-light font-inter">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aut
            asperiores et vero illo consequatur reiciendis libero adipisci
            quaerat quia?
          </p>
        </div>
        <div className="w-[60%] ">
          <img src={AllShoes} alt="" className="max-h-[400px] mx-auto" />
        </div>
      </div>
    </LayoutHome>
  );
}
