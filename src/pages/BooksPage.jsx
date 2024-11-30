import React, { useEffect, useState } from 'react'
import axios from '../lib/axios'
import toast from 'react-hot-toast'

const BooksPage = () => {

    const [books, setBooks] = useState(null)
    const [loading, setLoading] = useState(null)
  
    useEffect(() => {
  
      const fetchData = async () => {
        try {
          setLoading(true);
          const res = await axios.get('/books')
          setBooks(res.data.books)
        } catch (error) {
          return null
        } finally {
          setLoading(false);
        }
      }
  
      fetchData()
  
    }, [])

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            const res = await axios.delete(`/books/${id}`)

            toast.success("Book deleted successfully")

            setInterval(() => {
                window.location.reload();
            }, 1000)
        } catch (error) {
            return null
        } finally {
            setLoading(false);
        }
    }
  
    if (loading) return <h1>Loading...</h1>
  
    if (!books) return <h1>Something went wrong</h1>

    return (
        <div className='container m-auto h-screen'>

            <div className="p-2">
                <h1 className='text-2xl font-semibold'>All Books</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="text-left">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            books.map((book) => (
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{book.name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{book.author}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{book.desc}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <img className='w-8 h-8' src={book.bookImg} alt={book.name} />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            View
                                        </a>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(book.id)}
                                            className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BooksPage