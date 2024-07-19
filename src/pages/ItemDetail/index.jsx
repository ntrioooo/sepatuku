import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsById } from '../../redux/items/actions';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetailComponent from '../../components/ItemDetailComponent';
import { postData } from '../../utils/fetch';

export default function ItemDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSelector((state) => state.items);

  console.log(data);

  useEffect(() => {
    dispatch(fetchItemsById(id));
  }, [dispatch, id]);

  const [items, setItems] = useState({
    name: '',
    price: 0,
    size: '',
    quantity: 0,
    color: '',
  });

  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: data._id,
      price: parseInt(data.price),
      size: data.size,
      quantity: parseInt(items.quantity),
      color: data.color,
    };

    console.log('payload');
    console.log(payload);
    const res = await postData('/carts', payload);

    console.log(res);

    if (res?.data?.data) {
      alert('Berhasil menambahkan item ke keranjang');
      navigate('/carts');
    } else {
      alert('Gagal menambahkan item ke keranjang');
    }
  };

  return (
    <>
      <Navbar />
      <ItemDetailComponent
        onChange={handleChange}
        onSubmit={handleSubmit}
        name={data.name}
        price={data.price}
      />
    </>
  );
}
