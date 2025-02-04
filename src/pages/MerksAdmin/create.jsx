import React, { useState } from 'react';
import Form from './form';
import { postData } from '../../utils/fetch';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar';

export default function CreateMerk() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postData('/merks', form);
    if (res?.data?.data) {
      alert(`berhasil menambahkan merk ${res.data.data.name}`);
      navigate('/dashboard/merks');
      setIsLoading(false);
    } else {
      setIsLoading(false);
      console.log(res);
      alert(res?.response?.data);
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-200">
        <h1>Tambah Merk</h1>
        <Form
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}
