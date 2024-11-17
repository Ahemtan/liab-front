import React, { useState } from 'react'
import { useUserStore } from '../stores/useUserStore';
import { LoaderCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const { signup, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(formData.name, formData.email, formData.password, formData.password_conformation);
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">

      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder Image" className="object-cover w-full h-full" />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">email</label>
            <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="block text-gray-600">Confirm Password</label>
            <input onChange={(e) => setFormData({ ...formData, password_conformation: e.target.value })} type="password" id="password_confirmation" name="password_confirmation" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>
          <button disabled={loading} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full flex items-center justify-center">{loading ? <LoaderCircle className='animate-spin' /> : "Sign Up"}</button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <Link to="/signin" className="hover:underline">Sign in Here! 👋</Link>
        </div>
      </div>

    </div>
  )
}

export default SignUpPage