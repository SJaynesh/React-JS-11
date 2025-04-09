import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AddUser from './Pages/AddUser'
import EditUser from './Pages/EditUser'
import Error from './Pages/Error'
import NavBar from './Components/NavBar'

export default function App() {
  return (
    <div>

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/editUser' element={<EditUser />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  )
}

//User => username, email, password
// Store => LocalStroage => View => Edit / Delete

// Home(View)  |   AddUser(New Add)

// Home -> Edit / Delete

// Edit -> EditPage

// Third Party Module => react-router-dom
