import React, { useEffect, useState } from 'react'
import { toast } from "react-hot-toast";
import { Link } from 'react-router-dom';
import axios from "../lib/axios";
import { handleApiError } from '../lib/errorHandler';

const HomePage = () => {

  const [books, setBooks] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/books')
        setBooks(res.data.books)
        console.log(res.data.books)
      } catch (error) {
        return null
      } finally {
        setLoading(false);
      }
    }

    fetchData()

  }, [])

  if (loading) return <h1>Loading...</h1>

  if (!books) return <h1>Something went wrong</h1>

  return (

    <>

      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 from-gray-900/95 to-gray-900/25 ltr:bg-gradient-to-r bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left sm:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let's make book sharing

              <strong className="block font-extrabold text-indigo-500"> Easy & Interest </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/signup"
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className='flex gap-8 items-center justify-center flex-wrap mt-8 p-2'>
        {
          books && books.map(book => (
            <div key={book.id} className='w-72'>
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  alt=""
                  src={book.bookImg}
                  className="h-56 w-full object-contain "
                />

                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      {book.name}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 truncate">
                    {book.desc}
                  </p>

                  <div className='flex items-center justify-between'>
                    <Link to={`/book/${book.id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                      Find out more

                      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rotate-180">
                        &rarr;
                      </span>
                    </Link>

                    <p className="mt-4 line-clamp-3 text-sm/relaxed text-gray-500">
                      {book.author}
                    </p>
                  </div>

                </div>
              </article>
            </div>
          ))
        }

      </div>


    </>
  )
}

export default HomePage