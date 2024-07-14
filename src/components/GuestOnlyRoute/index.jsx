import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function GuestOnlyRoute({ children }) {
  let { token, role } = useSelector((state) => state.auth);

  if (token) {
    if (role === 'admin') {
      return <Navigate to="/dashboard" replace={true} />;
    } else {
      return <Navigate to="/" replace={true} />;
    }
  }

  return children || <Outlet />;
}
