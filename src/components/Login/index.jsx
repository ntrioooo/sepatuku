import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputWithLabel from '../InputWithLabel';
import Form from '../Form';
import Button from '../Button';
import { postData } from '../../utils/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await postData(`/auth/signin`, form);
      const { token, role } = res.data.data;
      dispatch(userLogin(token, role));

      if (role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center">Welcome back</h2>
        <div className="mt-8">
          <Form handleSubmit={handleSubmit}>
            <InputWithLabel
              label="Email address"
              type="email"
              htmlFor="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Password"
              type="password"
              htmlFor="password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="bg-black text-white font-medium py-2 px-5 rounded hover:bg-gray-800 shadow-md shadow-gray-500 w-full mt-3"
            >
              Login
            </Button>
          </Form>
          <p className="text-md text-black mt-3">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
