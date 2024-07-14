import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/actions';
import DashboardAdmin from '../../components/DashboardAdmin';

export default function DashboardPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <DashboardAdmin />
    </div>
  );
}
