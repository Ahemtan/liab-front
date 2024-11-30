import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from "./pages/HomePage.jsx"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import Layout from './components/Layout.jsx'
import { Toaster } from 'react-hot-toast'
import { useUserStore } from './stores/useUserStore.js'
import Dashboard from './pages/DashboardPage.jsx'
import BooksPage from './pages/BooksPage.jsx'

const App = () => {

  const { user, checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  return (
    <div>

      <Routes >
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/books" element={<BooksPage />} />
        </Route>
        <Route path="/signin" element={!user ? <SignInPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster />

    </div>
  )
}

export default App