import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoute({ children, roles }) {
  const adminAuth = useSelector((state) => state.auth);

  if (!adminAuth.token) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(adminAuth.role)) {
    return <Navigate to="/" />;
  }

  return children || <Outlet />;
}
