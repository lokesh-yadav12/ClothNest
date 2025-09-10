import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { token, setToken, backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 🔹 Normal user login
  const handleUserLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success("User login successful!");
        navigate('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // 🔹 Direct Admin Redirect (no email/password)
  const handleAdminRedirect = () => {
    window.location.href = "https://cloth-nest-c1t4.vercel.app/";
  };

  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);

  return (
    <form
      onSubmit={handleUserLogin}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Normal User Inputs */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />

      <div className="w-full justify-between flex text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        <Link to="/signup" className="cursor-pointer">
          Create account
        </Link>
      </div>

      {/* 🔹 Normal User Login Button */}
      <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
        Sign In
      </button>

      {/* 🔹 Direct Admin Redirect Button */}
      <button
        type="button"
        onClick={handleAdminRedirect}
        className="bg-red-300 text-white font-light px-8 py-2 mt-2"
      >
        Login as Admin
      </button>
    </form>
  );
};

export default Login;
