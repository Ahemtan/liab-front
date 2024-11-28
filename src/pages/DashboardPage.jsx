import React, { useState } from 'react'
import axios from '../lib/axios';
import toast from 'react-hot-toast';
import { handleApiError } from '../lib/errorHandler';

const Dashboard = () => {

  const [newBook, setNewBook] = useState({
    name: '',
    bookImg: '',
    author: '',
    desc: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/books', newBook);
      toast.success(res.data.message || "Book created successfully");
      if(res.status === 200) {
        setInterval(() => {
          window.location.reload();
        }, 1000)
      }
    } catch (error) {
      const { message, statusCode } = handleApiError(error);
      toast.error(message || "Something went wrong");
    }
  }
  return (
    <div className='container h-screen m-auto'>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <h1 className='text-2xl font-semibold mb-4'>Create A Book</h1>
        <div className='w-1/2'>
          <form className='w-full' onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input onChange={(e) => setNewBook({ ...newBook, name: e.target.value })} type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            </div>

            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-600">Author</label>
              <input onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} type="text" id="author" name="author" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-600">Image Url</label>
              <input onChange={(e) => setNewBook({ ...newBook, bookImg: e.target.value })} type="text" id="bookImg" name="bookImg" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            </div>

            <div className="mb-4">
              <label htmlFor="desc" className="block text-gray-600">Description</label>
              <input onChange={(e) => setNewBook({ ...newBook, desc: e.target.value })} type="text" id="desc" name="desc" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
            </div>


            <button disabled={false} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full flex items-center justify-center">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dashboard