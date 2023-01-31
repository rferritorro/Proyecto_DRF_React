import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home/Home'
import Stations from './pages/Stations'
import About from './pages/About/About'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/stations' element={<Stations/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
 
}

export default App;
