import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputWithLabel from '../InputWithLabel';
import Form from '../Form';
import Button from '../Button';
import { postData } from '../../utils/fetch';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
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
      await postData(`/auth/signup`, form);

      setIsLoading(false);

      navigate('/login');
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center">
          Create an account
        </h2>
        <div className="mt-8">
          <Form handleSubmit={handleSubmit}>
            <InputWithLabel
              label="First name"
              type="text"
              htmlFor="firstName"
              value={form.firstName}
              onChange={handleChange}
              name="firstName"
            />
            <InputWithLabel
              label="Last name"
              type="text"
              htmlFor="lastName"
              value={form.lastName}
              onChange={handleChange}
              name="lastName"
            />
            <InputWithLabel
              label="Email address"
              type="email"
              htmlFor="email"
              value={form.email}
              onChange={handleChange}
              name="email"
            />
            <InputWithLabel
              label="Password"
              type="password"
              htmlFor="password"
              value={form.password}
              onChange={handleChange}
              name="password"
            />
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="bg-black text-white font-medium py-2 px-5 rounded hover:bg-gray-800 shadow-md shadow-gray-500 w-full mt-3"
            >
              Register
            </Button>
          </Form>
          <p className="text-md text-black mt-3">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
