import React from 'react';
import LayoutHome from '../LayoutHome';
import CardTestimoni from '../CardTestimoni';

export default function Testimoni() {
  return (
    <LayoutHome>
      <div className="mx-auto max-w-7xl">
        <div className="text-center text-3xl font-bold mt-5">
          Client Testimoni
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto mt-5">
          <CardTestimoni>
            <p className="text-lg tracking-tight text-slate-900">
              I absolutely love the brand and the quality of the shoes I
              purchased from this website. The shoes are in excellent condition
              and the prices are very reasonable.
            </p>
            <div className="relative mt-3 flex items-center justify-between border-t border-slate-200 pt-6">
              <div>
                <div className="font-display text-base text-slate-900">
                  Sheryl Berge
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-slate-50">
                <img
                  alt=""
                  className="h-14 w-14 object-cover"
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                />
              </div>
            </div>
          </CardTestimoni>
          <CardTestimoni>
            <p className="text-lg tracking-tight text-slate-900">
              I absolutely love the brand and the quality of the shoes I
              purchased from this website. The shoes are in excellent condition
              and the prices are very reasonable.
            </p>
            <div className="relative mt-3 flex items-center justify-between border-t border-slate-200 pt-6 justify-self-end">
              <div className="font-display text-base text-slate-900">
                Sheryl Berge
              </div>
              <div className="overflow-hidden rounded-full bg-slate-50">
                <img
                  alt=""
                  className="h-14 w-14 object-cover"
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                />
              </div>
            </div>
          </CardTestimoni>
          <CardTestimoni>
            <p className="text-lg tracking-tight text-slate-900">
              I absolutely love the brand and the quality of the shoes I
              purchased from this website. The shoes are in excellent condition
              and the prices are very reasonable.
            </p>
            <div className="relative mt-3 flex items-center justify-between border-t border-slate-200 pt-6">
              <div>
                <div className="font-display text-base text-slate-900">
                  Sheryl Berge
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-slate-50">
                <img
                  alt=""
                  className="h-14 w-14 object-cover"
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                />
              </div>
            </div>
          </CardTestimoni>
        </div>
      </div>
    </LayoutHome>
  );
}
