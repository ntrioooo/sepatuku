import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { config } from '../../configs';
import axios from 'axios';
import { fetchMerks } from '../../redux/merks/actions';

export default function MerksAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const merks = useSelector((state) => state.merks);
  console.log(merks);

  useEffect(() => {
    dispatch(fetchMerks());
  }, [dispatch]);

  return (
    <div>
      <h1>Merks Admin</h1>
      <ul>
        {merks.map((merk) => (
          <li key={merk.id}>{merk.name}</li>
        ))}
      </ul>
    </div>
  );
}
