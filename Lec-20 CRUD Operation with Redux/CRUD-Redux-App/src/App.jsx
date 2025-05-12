import { Routes, Route } from 'react-router'
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import NavBar from './Components/NavBar';

function App() {
  return <>

    <NavBar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addUser' element={<AddUser />} />
      <Route path='/edit' element={<EditUser />} />
    </Routes>
  </>
}

export default App;