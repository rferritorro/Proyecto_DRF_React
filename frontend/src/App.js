import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home/Home'
import Stations from './pages/Stations'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/Login/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreateStation from './components/Dashboard/stations/CreateStation';
import About from './pages/About/About'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/stations' element={<Stations/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/dashboard/add_station' element={<CreateStation/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
    
  );
 
}

export default App;
