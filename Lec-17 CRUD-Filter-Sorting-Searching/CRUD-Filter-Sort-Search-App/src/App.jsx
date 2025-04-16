import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AddProductPage from './Pages/AddProductPage'
import EditProductPage from './Pages/EditProductPage'
import Nav from './Components/Nav'

export default function App() {

  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/addProduct' element={<AddProductPage />} />
        <Route path='/editProduct' element={<EditProductPage />} />
      </Routes>
    </div>
  )
}
