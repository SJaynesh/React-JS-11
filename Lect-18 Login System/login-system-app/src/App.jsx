import { Routes, Route } from 'react-router'
import Login from './Pages/Login';
import Register from './Pages/Register';
import DashBoard from './Pages/DashBoard';

const App = () => {
  return <>

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashBoard' element={<DashBoard />} />
    </Routes>
  </>
}

export default App;