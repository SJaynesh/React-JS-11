import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Jaynesh from './Pages/Jaynesh'

export default function App() {
  return (
    <div>
      <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      <br />
      <br />
      <Link to="/"> Home </Link> |
      <Link to="/about"> About </Link> |
      <Link to="/contact"> Contact </Link> |
      <Link to="/jaynesh"> Jaynesh </Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/jaynesh' element={<Jaynesh />} />
      </Routes>
    </div>
  )
}
