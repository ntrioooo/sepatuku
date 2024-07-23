import React, { useEffect } from 'react';
import LayoutHome from '../LayoutHome';
import { useSelector, useDispatch } from 'react-redux';
import { formatIDR } from '../../utils/formatIDR';
import { fetchCarts } from '../../redux/carts/actions';
import ImageSamba from '../../assets/images/samba.png';
import Button from '../Button';

export default function CheckoutComponent() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.carts.data);

  // console.log(items);

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  const selectedItems = items?.filter((item) => item.checked) || [];

  const getTotalPrice = () => {
    return selectedItems.reduce((total, item) => {
      return total + item.itemId.price * item.quantity;
    }, 0);
  };

  console.log(selectedItems);
  return (
    <LayoutHome>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Checkout
          </h2>

          <div className="mt-6 mx-auto w-full">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
              <div className="flex-col justify-between w-full items-center space-y-4">
                <p className="text-base font-semibold text-gray-900">
                  Alamat Pengiriman
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-gray-500 hover:text-gray-900 space-y-2">
                    <p>Trio Nugroho</p>
                    <p>081280903830</p>
                  </div>
                  <div>
                    <p className="text-base font-light text-gray-900">
                      Bekasi timur regensi blok i3 no 20 (blok i rt 3 rw 18 no
                      20), KOTA BEKASI - MUSTIKA JAYA, JAWA BARAT, ID 17156
                    </p>
                  </div>
                  <Button>Ubah</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mx-auto w-full">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
              <table className="min-w-full divide-y divide-gray-200 border-y border-dashed">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Produk
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Variasi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Harga Satuan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Jumlah
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subtotal Produk
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-dashed divide-gray-200">
                  {selectedItems.map((item, index) => (
                    <tr key={index + 1}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={ImageSamba}
                            alt="Product"
                            className="w-32"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.itemId.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.color}
                        <br />
                        {item.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatIDR(item.itemId.price)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatIDR(item.itemId.price * item.quantity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 flex justify-end">
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    Total Pesanan:{' '}
                    <span className="text-red-600 font-semibold">
                      {formatIDR(getTotalPrice())}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mx-auto w-full">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
              <h2 className="text-lg font-semibold text-gray-900 sm:text-base">
                Metode Pembayaran
              </h2>
              <div className="border-b border-dashed">
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-small"
                  className="inline-flex px-3 py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer mt-2  peer-checked:border-red-700 peer-checked:text-red-700 mb-3"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">QRIS</div>
                  </div>
                </label>
              </div>
              <div className="mt-6 flex justify-end">
                <div className="text-right">
                  <Button className="text-md text-white bg-black hover:bg-gray-800 px-5 py-3" >
                    Buat Pesanan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutHome>
  );
}
