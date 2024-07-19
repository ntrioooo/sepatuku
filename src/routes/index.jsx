import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
// import GuestOnlyRoute from '../components/GuestOnlyRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';
import AdminRoute from '../components/AdminRoute';
import HomePage from '../pages/Home';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import DashboardPage from '../pages/Dashboard';
import MerksAdminPage from '../pages/MerksAdmin';
import CreateMerkPage from '../pages/MerksAdmin/create';
import EditMerkPage from '../pages/MerksAdmin/edit';
import OrdersPage from '../pages/Orders';
import ItemDetailPage from '../pages/ItemDetail';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuestOnlyRoute>
            <LoginPage />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestOnlyRoute>
            <RegisterPage />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AdminRoute roles={['admin']}>
            <DashboardPage />
          </AdminRoute>
        }
      />
      <Route
        path="/dashboard/merks"
        element={
          <AdminRoute roles={['admin']}>
            <MerksAdminPage />
          </AdminRoute>
        }
      />
      <Route
        path="/dashboard/merks/create"
        element={
          <AdminRoute roles={['admin']}>
            <CreateMerkPage />
          </AdminRoute>
        }
      />
      <Route
        path="/dashboard/merks/edit/:id"
        element={
          <AdminRoute roles={['admin']}>
            <EditMerkPage />
          </AdminRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <GuardRoute />
          </>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        <Route path="/orders/:id" element={<OrdersPage />} />
      </Route>
    </Routes>
  );
}
