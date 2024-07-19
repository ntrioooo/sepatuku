import React, { useState } from 'react';
import LayoutHome from '../LayoutHome';
import ImageSamba from '../../assets/images/samba.png';
import Button from '../Button';
import CollapseItem from '../CollapseItem';

export default function ItemDetailComponent({
  name,
  price,
  onChange,
  onSubmit,
}) {
  return (
    <LayoutHome>
      <div className="flex bg-white px-4 shadow-md border border-gray-200 items-center">
        <div className="w-full">
          <img
            className="object-cover w-[300px] mx-auto"
            src={ImageSamba}
            alt="Sepatu Samba"
          />
        </div>
        <div className="w-full px-5 py-6">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-600 text-sm mt-3">
            Baju yang bisa anda klaim dengan cepat dan mudah dipakai.
          </p>
          <p className="text-gray-600 text-xl mt-3">IDR {price} </p>

          <div className="mt-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Choose size{' '}
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1"
              onChange={onChange}
              name="size"
            >
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
            </select>
          </div>
          <div className="mt-3">
            <CollapseItem
              title="Please Make Sure The Size Fits On You"
              content="If you are unsure about your size, please click the size chart button and browse through the chart to find your correct measurements. Our company policy does not accept refunds or returns for sizing-related issues. For more details, kindly contact our Customer Service to consult further"
            />
          </div>
          <div className="mt-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Choose color{' '}
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1"
              onChange={onChange}
              name="color"
            >
              <option>White</option>
              <option>Black</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Quantity{' '}
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1"
              onChange={onChange}
              name="quantity"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          <Button
            action={onSubmit}
            className="text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-900 rounded-md text-lg px-4 py-2 items-center justify-center mt-3"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </LayoutHome>
  );
}
