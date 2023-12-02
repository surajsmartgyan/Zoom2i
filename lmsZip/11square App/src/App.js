import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/common/Login';
import Singup from './components/common/Singup';
import ForgetPassword from './components/common/ForgetPassword';
import ErrorPage from './components/common/ErrorPage';
import FullLayout from './components/Admin/Layouts/FullLayout';
import User from './components/Admin/pages/User';
import Employee from './components/Admin/pages/Employee';
import Holiday from './components/Admin/pages/Holiday';
import Lookup from './components/Admin/pages/Lookup';
import Client from './components/Admin/pages/Client';
import Settings from './components/Admin/pages/Settings';
import Leads from './components/Admin/pages/Leads';
import Home from './components/Admin/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Singup />} />
        <Route exact path='/forgetpassword' element={<ForgetPassword />} />
        <Route path="/dashboard" exact element={<FullLayout />}>
          <Route path="/dashboard" exact element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='employee' element={<Employee />} />
          <Route path='lookup' element={<Lookup />} />
          <Route path='client' element={<Client />} />
          <Route path='holiday' element={<Holiday />} />
          <Route path='setting' element={<Settings />} />
          <Route path='lead' element={<Leads />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
