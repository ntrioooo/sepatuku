import React, { useEffect, useState } from 'react';
import Form from './form';
import { putData, getData } from '../../utils/fetch';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar';

export default function EditMerks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const merkId = useParams();

  console.log(merkId);

  const [form, setForm] = useState({
    name: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchOneMerks = async () => {
    const res = await getData(`/merks/${merkId.id}`);

    setForm({ ...form, name: res.data.data.name });
  };

  useEffect(() => {
    fetchOneMerks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await putData(`/merks/${merkId.id}`, form);
    if (res?.data?.data) {
      navigate('/dashboard/merks');
      alert(`Berhasil ubah merk ${res.data.data.name}`);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      alert(res);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-200">
        <h1>Edit Merk</h1>
        <Form
          edit
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}
