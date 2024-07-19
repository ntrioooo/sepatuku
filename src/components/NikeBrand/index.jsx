import React, { useEffect } from 'react';
import CardPopular from '../CardPopular';
import LayoutHome from '../LayoutHome';
import ImageSamba from '../../assets/images/samba.png';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../redux/items/actions';
import { MdArrowOutward } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button';

export default function NikeBrand() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <LayoutHome>
      <p className="text-2xl font-bold mb-2 mt-5">Nike</p>
      <div className="flex items-center mb-4">
        <span className="border-t-2 border-black w-8 mr-2"></span>
        <p className="text-sm font-medium text-gray-600">
          Our Trending Shoe for Nike
        </p>
      </div>
      {status === 'process' ? (
        <div className="text-sm text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {data.slice(0, 5).map((item) => (
            <CardPopular key={item._id}>
              <a href="#" className="justify-center flex">
                <img
                  className="rounded-t-lg max-w-[200px] pb-16 rotate-[-20deg]"
                  src={ImageSamba}
                  alt="product image"
                />
              </a>
              <div className="px-3 pb-3">
                <Link to={`/items/${item._id}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                    {item.name}
                  </h5>
                </Link>
                <div className="flex-col items-center justify-between">
                  <span className="text-md font-medium text-gray-500">
                    {item.price}
                  </span>
                  <Button
                    action={() => navigate(`/items/${item._id}`)}
                    className="text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-900 rounded-md text-lg p-1 flex w-full items-center justify-center mt-2"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </CardPopular>
          ))}
        </div>
      )}
    </LayoutHome>
  );
}
