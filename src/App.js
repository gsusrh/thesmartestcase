import logo from './images/logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import PersonalOrder from './pages/PersonalOrder';
import BusinessOrder from './pages/BusinessOrder';
import Orders from './pages/order/Orders';
import Checkout from './pages/order/Checkout';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>

      <Routes> 

        <Route index path='/' element={<Home/> } />
        <Route index path='/login' element={<Login/> } />
        <Route index path='/signup' element={<Register/> } />
        <Route index path='/account' element={<Account/> } />

        <Route index path='/personalorder' element={<PersonalOrder/> } />
        <Route index path='/businessorder' element={<BusinessOrder/> } />
        <Route index path='/orders' element={<Orders/> } />
        <Route index path='/checkout' element={<Checkout/> } />

      </Routes>


    </Router>
  );
}

export default App;
