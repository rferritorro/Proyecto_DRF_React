import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home/Home'
import History from './pages/History/History'
import Stations from './pages/Stations'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import IncidenceProfile from './components/Incidence/IncidencesProfile'
import Register from './pages/Login/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreateStation from './components/Dashboard/stations/CreateStation';
import AuthGuardAdmin from "./services/AuthGuard/AuthGuardAdmin";
import AuthGuardUser from "./services/AuthGuard/AuthGuardUser";
import AuthGuardNotUser from "./services/AuthGuard/AuthGuardNotUser";
import About from './pages/About/About'
import {UserContextProvider} from './context/UserContext'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/stations' element={<Stations />} />
            <Route path='/about' element={<About />} />
            <Route element={<AuthGuardUser />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
            <Route element={<AuthGuardNotUser />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/profile/incidences' element={<IncidenceProfile />} />
            </Route>
            <Route element={<AuthGuardAdmin />}>
              <Route path='/history' element={<History />} />
              <Route path='/dashboard/add_station' element={<CreateStation />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
          <ToastContainer />
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </div>
    
  );
 
}

export default App;
