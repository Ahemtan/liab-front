import React, { useState } from 'react'
import { LoaderCircle } from 'lucide-react';
import { Link, useNavigate} from 'react-router-dom';
import { useUserStore } from '../stores/useUserStore';

const SignInPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { login, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">

      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder Image" className="object-cover w-full h-full" />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">email</label>
            <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>
          <button disabled={loading} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full flex items-center justify-center">{loading ? <LoaderCircle className='animate-spin' /> : "Sign In"}</button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <Link to="/signup" className="hover:underline">Sign up Here</Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage