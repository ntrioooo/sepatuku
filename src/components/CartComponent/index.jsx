import React, { useEffect, useState } from 'react';
import LayoutHome from '../LayoutHome';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts, updateCarts, checkCarts } from '../../redux/carts/actions';
import ImageSamba from '../../assets/images/samba.png';
import { formatIDR } from '../../utils/formatIDR';
import { useNavigate } from 'react-router-dom';

function CartComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.carts.data);

  const [quantity, setQuantity] = useState({});
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  useEffect(() => {
    if (items) {
      const initialQuantity = {};
      items.forEach((item) => {
        initialQuantity[item._id] = item.quantity;
      });
      setQuantity(initialQuantity);
    }
  }, [items]);

  const handleCheckboxChange = (itemId) => {
    const newCheckedStatus = !selectedItems[itemId];
    try {
      dispatch(checkCarts({ id: itemId, checked: newCheckedStatus }));
      setSelectedItems((prevState) => ({
        ...prevState,
        [itemId]: newCheckedStatus,
      }));
      dispatch(fetchCarts());
    } catch (error) {
      console.log('Error toggling item selection:', error);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    try {
      if (newQuantity < 1) return;
      dispatch(updateCarts({ id: itemId, quantity: newQuantity }));
      setQuantity((prevState) => ({
        ...prevState,
        [itemId]: newQuantity,
      }));
      dispatch(fetchCarts());
    } catch (error) {
      console.log('Error updating cart:', error);
    }
  };

  const getTotalPrice = () => {
    return (
      items?.reduce((total, item) => {
        if (selectedItems[item._id]) {
          return total + item.itemId.price * quantity[item._id];
        }
        return total;
      }, 0) || 0
    );
  };

  const getSelectedItems = () => {
    return items?.filter((item) => selectedItems[item._id]) || [];
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <LayoutHome>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-3">
              {items?.map((item, index) => (
                <div
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
                  key={index + 1}
                >
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(item._id)}
                    />
                    <a href="#" className="shrink-0 md:order-1">
                      <img className="h-16" src={ImageSamba} alt="imac image" />
                    </a>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center me-5">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          data-input-counter
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                          value={item.quantity}
                          required
                          readOnly
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900">
                          {formatIDR(item.itemId.price)}
                        </p>
                      </div>
                    </div>
                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline"
                      >
                        {item.itemId.name}
                      </a>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        >
                          Add to Favorites
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline"
                      >
                        {item.color}
                      </a>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        >
                          {item.size}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">
                  Order summary
                </p>

                <div className="space-y-4">
                  {getSelectedItems().map((item) => (
                    <div className="space-y-2" key={item._id}>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          {item.itemId.name} <br /> ({quantity[item._id]} items)
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                          {formatIDR(item.itemId.price * quantity[item._id])}
                        </dd>
                      </dl>
                    </div>
                  ))}

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">
                      {formatIDR(getTotalPrice())}
                    </dd>
                  </dl>
                </div>

                <button
                  onClick={handleCheckout}
                  className="flex w-full items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                >
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500">
                    {' '}
                    or{' '}
                  </span>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutHome>
  );
}

export default CartComponent;
