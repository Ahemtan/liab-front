import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../stores/useUserStore';
import MenuItem from './ui/MenuItem';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logout } = useUserStore();
    const isAdmin = user?.role === 'ADMIN';

    return (
        <nav className="flex w-screen h-20 fixed justify-between items-center py-4 px-8 z-[999] bg-white ">
            <Link to="/">
                <h1 className="text-4xl text-indigo-600 font-bold hover:text-indigo-500">Libray</h1>
            </Link>

            <div className="relative">
                <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">

                    {
                        user && <a
                            href="#"
                            className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                        >
                            {user?.name}
                        </a>
                    }


                    {!user ? <Link className='inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500' to="/signin">Login</Link>
                        :
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    }


                </div>

                {open && user && (
                    <div
                        className="absolute right-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                        role="menu"
                        aria-labelledby="user-menu"
                    >
                        <div className="p-2">
                            {/* Profile Link */}
                            <MenuItem to="/" children={`${user.name} - Profile`} />

                            {/* Dashboard Link (Admin only) */}
                            {isAdmin && <MenuItem to="/dashboard" children="Dashboard" />}

                            {/* Logout Button */}
                            <MenuItem onClick={logout} children="Logout" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;