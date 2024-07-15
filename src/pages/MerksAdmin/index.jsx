import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { config } from '../../configs';
import axios from 'axios';
import { fetchMerks } from '../../redux/merks/actions';
import Button from '../../components/Button';
import TableWithAction from '../../components/TableWithAction';
import { deleteData } from '../../utils/fetch';

export default function MerksAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const merks = useSelector((state) => state.merks);
  console.log(merks);

  const handleDelete = async (id) => {
    alert('Delete ' + id);
    const res = await deleteData(`/merks/${id}`);
    alert('Delete ' + res.data.data.name);
    dispatch(fetchMerks());
  };

  const handleEdit = async (id) => {
    alert('Edit' + id);
    navigate(`/dashboard/merks/edit/${id}`);
  };

  useEffect(() => {
    dispatch(fetchMerks());
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-200">
        <div className="flex items-center mb-4 justify-between">
          <h1 className="text-2xl font-semibold">Merks</h1>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button
          className="bg-black text-white font-medium py-2 px-5 rounded hover:bg-gray-800 shadow-md shadow-gray-500 mt-3"
          action={() => navigate('/dashboard/merks/create')}
        >
          Tambah
        </Button>
        <TableWithAction
          data={merks.data}
          status={merks.status}
          thead={['Nama', 'Aksi']}
          tbody={['name']}
          editUrl={'/dashboard/merks/edit'}
          deleteAction={(id) => handleDelete(id)}
        />
      </main>
    </div>
  );
}
